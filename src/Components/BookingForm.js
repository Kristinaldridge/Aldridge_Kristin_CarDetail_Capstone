import React, {useReducer, useEffect } from 'react';
import axios from 'axios';
import './booking-form.css';
import './index.css';

const initialState = {
    bookings: [],
    name: '',
    phone: '',
    service: 'exterior',
    date: '',
    time: '',
    editingBookingId: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.payload };
        case 'SET_BOOKINGS':
            return { ...state, bookings: action.payload };
        case 'ADD_BOOKING':
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
                name: '',
                phone: '',
                service: 'exterior',
                date: '',
                time: ''
            };
        case 'DELETE_BOOKING':
            return {
                ...state,
                bookings: state.bookings.filter(booking => booking._id !== action.payload)
            };
        case 'EDIT_BOOKING':
            return {
                ...state,
                name: action.payload.name,
                phone: action.payload.phone,
                service: action.payload.service,
                date: action.payload.date,
                time: action.payload.time,
                editingBookingId: action.payload._id
            };
        case 'SAVE_BOOKING':
            const updatedBookings = state.bookings.map(booking =>
                booking._id === action.payload._id
                    ? {
                        ...booking,
                        name: action.payload.name,
                        phone: action.payload.phone,
                        service: action.payload.service,
                        date: action.payload.date,
                        time: action.payload.time
                    }
                    : booking
            );
            return {
                ...state,
                bookings: updatedBookings,
                editingBookingId: null,
                name: '',
                phone: '',
                service: 'exterior',
                date: '',
                time: ''
            };
        case 'CANCEL_EDIT':
            return {
                ...state,
                editingBookingId: null,
                name: '',
                phone: '',
                service: 'exterior',
                date: '',
                time: ''
            };
        default:
            return state;
    }
};

const BookingForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { bookings, name, phone, service, date, time, editingBookingId } = state;
    const services = ['Exterior Detailing-Standard', 'Exterior Detailing-Premium', 'Interior Detailing', 'Window Tinting'];

    useEffect(() => {
       
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:5050/bookings')
                dispatch({ type: 'SET_BOOKINGS', payload: response.data.data });
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newBooking = {
            id: Date.now (),
            name: name,
            phone: phone,
            service: service,
            date: date,
            time: time
        };

        try {
            const response = await axios.post(`http://localhost:5050/bookings`, newBooking);
            dispatch({ type: 'ADD_BOOKING', payload: response.json });
            window.location.reload();
            console.log ("update");
        } catch (error) {
            console.error('Error adding booking:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5050/bookings/${id}`);
            dispatch({ type: 'DELETE_BOOKING', payload: id });
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    const handleEdit = (booking) => {
        dispatch({ type: 'EDIT_BOOKING', payload: booking });
    };

    const handleSave = async (event) => {
        event.preventDefault();
        console.log("save");

        const updatedBooking = {
            id: editingBookingId,
            name: name,
            phone: phone,
            service: service,
            date: date,
            time: time
        };

        try {
            const response = await axios.put(`http://localhost:5050/bookings/${editingBookingId}`, updatedBooking);
            dispatch({ type: 'SAVE_BOOKING', payload: response.data });
            window.location.reload();
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    const handleCancel = () => {
        dispatch({ type: 'CANCEL_EDIT' });
    };

    return (
        <section className="booking-section">
            <h1>Book an Appointment</h1>
            <form onSubmit={editingBookingId !== null ? handleSave : handleSubmit} id="booking-form">
        
                <label htmlFor="name">Your Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'name', payload: e.target.value })}
                    required
                />
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Format: 123-456-7890"
                    value={phone}
                    onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'phone', payload: e.target.value })}
                    required
                />
                <label htmlFor="service">Select Service:</label>
                <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'service', payload: e.target.value })}
                >
                    {services.map((option, index) => (
                        <option key={index} value={option.toLowerCase().replace(/\s+/g, '-')}>
                            {option}
                        </option>
                    ))}
                </select>
                <label htmlFor="date">Select Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'date', payload: e.target.value })}
                />
                <label htmlFor="time">Select Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={time}
                    onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'time', payload: e.target.value })}
                />
                <button type="submit">
                    {editingBookingId !== null ? 'Save' : 'Submit'}
                </button>
                {editingBookingId !== null &&
                    <button type="button" onClick={handleCancel}>Cancel</button>
                }
            </form>
            <div id="booking-list">
                {bookings.map((booking) => (
                    <div key={booking._id} className="booking-card">
                        <h2>{booking.service}</h2>
                        <p><strong>Name:</strong> {booking.name}</p>
                        <p><strong>Phone:</strong> {booking.phone}</p>
                        <p><strong>Date:</strong> {booking.date}</p>
                        <p><strong>Time:</strong> {booking.time}</p>
                        <div className="booking-details">
                            <p>Confirmation number: ABC123</p>
                            <button className="edit-btn" onClick={() => handleEdit(booking)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDelete(booking._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BookingForm;
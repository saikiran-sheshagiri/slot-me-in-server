import mongoose from 'mongoose';
import {userSchema, User} from './user';

export const slotSchema = new mongoose.Schema({ 
    participant: {
		type:userSchema,
		default: null
	}
}, {
    timestamps: true
});

export const Slot = mongoose.model('Slot', slotSchema);
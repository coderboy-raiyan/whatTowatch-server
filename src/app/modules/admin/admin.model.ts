import { Schema, model } from 'mongoose';
import { TAdmin } from './admin.interface';

const adminSchema = new Schema<TAdmin>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        contactNo: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        profileImg: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
);

const Admin = model('Admin', adminSchema);

export default Admin;
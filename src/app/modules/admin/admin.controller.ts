import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsyncError from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TAdmin } from './admin.interface';
import AdminService from './admin.service';

const createAdmin = catchAsyncError(async (req: Request, res: Response) => {
    const result = await AdminService.createAdminToDB(req.body);
    sendResponse<TAdmin>(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: 'Admin created successfully',
        data: result,
    });
});

const AdminController = {
    createAdmin,
};

export default AdminController;

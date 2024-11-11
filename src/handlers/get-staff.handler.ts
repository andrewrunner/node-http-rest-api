import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import StaffModel from "../models/staff.model";


export class GetStaffHandler extends RequestHandler {

    private kacheKey = 'staff';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await StaffModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}
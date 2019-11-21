'use strict';
const { validationResult } = require('express-validator');
const models = require('./../models');
const userRole = require('../modules/userRole');

exports.classes = async (req, res) => {
    if (userRole.validatePremium(req, res)) return;

    const classes = await models.Class.findAll({ order: [['id', 'DESC']] });

    res.status(200).json({ status: "success", message: "List of classes", body: classes })
}

exports.createClass = async (req, res) => {
    if (userRole.validateAdmin(req, res)) return;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ status: 'failed', message: 'Creating class failed', body: errors.array() });
    }

    //zoom link will be generated using api
    const demoZoomLink = 'https://zoom.us/j/492468757';

    const createClass = await models.Class.create({ title: req.body.title, description: req.body.description, prepkitLink: req.body.prepkit, classDate: req.body.classDate, zoomLink: demoZoomLink });

    if (createClass) {
        res.status(200).json({ status: "success", message: "Meeting created successfully", body: createClass });
    } else {
        res.status(200).json({ status: "failed", message: "Error creating meeting ", body: [] });
    }

}

exports.attendClass = async (req, res) => {
    if (userRole.validatePremium(req, res)) return;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ status: 'failed', message: 'Linking class failed', body: errors.array() });
    }

    const class_id = req.body.class_id;
    const user_id = req.userData.id;

    const currentClass = await models.Class.findOne({ where: { id: class_id } });

    if (currentClass) {

        const checkAttendance = await models.Attendance.findOne({ where: { classId: class_id, userId: user_id } });

        if (!checkAttendance) {
            models.Attendance.create({ classId: class_id, userId: user_id });
        }

        res.status(200).json({ status: "success", message: "Redirect to zoom link ", body: { redirectLink: currentClass.zoomLink } })

    } else {
        res.status(200).json({ status: "failed", message: "Error linking class", body: [] })
    }
}
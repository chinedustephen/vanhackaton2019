exports.validatePremium = (req, res) => {
    if (req.userData.premium === "no" && req.userData.role === "member") {
        return res.status(200).json({ status: "failed", message: "User is not a premium member", body: [] });
    }
}

exports.validateAdmin = (req, res) => {
    if (req.userData.role !== "admin") {
        return res.status(200).json({ status: "failed", message: "User is not an admin", body: [] });
    }
}
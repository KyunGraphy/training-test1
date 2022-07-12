let loginController = (req, res) => {

    res.status(200).json({
        msg: 'login success'
    })
}
let registerController = (req, res) => {
    res.status(200).json({
        msg: 'register success'
    })
}

module.exports = {
    loginController: loginController,
    registerController: registerController
}
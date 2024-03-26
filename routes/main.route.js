
import express from 'express'
const router=express.Router()

import user from '../controllers/main.controller.js'

router.route("/login").post(user.login)
router.route("/dashboard").post(user.dashboard)

export default router
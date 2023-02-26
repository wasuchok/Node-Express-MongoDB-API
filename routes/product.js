const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('../models/Product.js')

router.get('/', (req, res) => {
     Product.find((err, product) => {
        if (err) {
            res.status(400).json({
                status : 'error',
                message : err.message
            })
            return
        }
        res.status(200).json({
            status : 'ok',
            message : "สำเร็จ",
            data : product
        })
     })
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, product) => {
       if (err) {
           res.status(400).json({
               status : 'error',
               message : err.message
           })
           return
       }
       res.status(200).json({
           status : 'ok',
           message : "สำเร็จ",
           data : product
       })
    })
})

router.post('/', (req, res) => {
    const { prod_name } = req.body
    Product.create(req.body, (err, product) => {
        if(err) {
            res.status(400).json({
                status : 'error',
                message : err.message
            })
            return
        }
        res.status(200).json({
            status : 'ok',
            message : "สำเร็จ",
            data : product
        })
    })
})

router.put('/:id', (req, res) => {
    const { prod_name } = req.body
    Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
        if(err) {
            res.status(400).json({
                status : 'error',
                message : err.message
            })
            return
        }
        res.status(200).json({
            status : 'ok',
            message : "สำเร็จ",
            data : product
        })
    })
})

router.delete('/:id', (req, res) => {
    const { prod_name } = req.body
    Product.findByIdAndDelete(req.params.id, (err, product) => {
        if(err) {
            res.status(400).json({
                status : 'error',
                message : err.message
            })
            return
        }
        res.status(200).json({
            status : 'ok',
            message : "สำเร็จ",
            data : product
        })
    })
})

module.exports = router
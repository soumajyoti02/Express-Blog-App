const express = require("express")
const path = require("path")
const blogs = require("../data/blogs")

const router = express.Router()

router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, '../template/index.html'))
    res.render("home")
})

router.get("/blog", (req, res) => {
    res.render("blogHome", {
        blogs: blogs,
    })
})

router.get("/blogpost/:slug", (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });

    let myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    // console.log(myBlog)
    // res.sendFile(path.join(__dirname, '../template/blogPage.html'))

    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    })
})

module.exports = router  
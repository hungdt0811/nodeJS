module.exports = (req, res) => {
    const url = req.url;
    if(url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Home page !!</h1>');
        res.end();
    }

    res.write('<h1>Page node found</h1>');
    res.end();
}
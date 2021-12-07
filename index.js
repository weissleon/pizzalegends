const express = require('express');
const app = express();

// constants
const PORT = 3000;

app.use(express.static('./app'));

app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});

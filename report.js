const newman = require('newman');
const dotenv = require('dotenv').config();

newman.run({
    // Specifies the Postman Collection to run.
    // The collection path uses require() to load a JSON collection file, typical in local setups.
    // The screenshot path: require('./collection/dmoney-user-api-collection.json') is not fully visible.
    // collection: `https://api.postman.com/collections/41098011-2753eeec-51a9-4079-91ad-bf01f583b012?access_key=${process.env.PMAT_KEY}`,
    collection: require('./collection/dmoney.json'),
    // The screenshot also shows a remote URL, which is less common for local development but possible.
    // collection: 'https://api.postman.com/collections/1844288-ed96937c...',

    // Defines the reporters to generate reports. 'htmlextra' is a popular community reporter.
    reporters: 'htmlextra',

    // Sets the number of iterations for the collection run.
    iterationCount: 1,

    // Specifies the reporter options. 'reporter' here refers to the 'htmlextra' reporter.
    reporter: {
        htmlextra: {
            // Path where the HTML report will be saved.
            export: './Reports/report.html', 
            // If not specified, the report file is generated in the newman directory with a timestamp.
            // Other options like logs, title, etc. can also be added here.
        }
    }
}, function (err) {
    // This callback function handles the result of the Newman run.
    if (err) { 
        throw err; 
    }
    console.log('Collection run complete!');
});
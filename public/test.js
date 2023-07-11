//Database code that we are testing
let db = require('../database');
const express = require('express');

//Server code that we are testing
let server = require('../web-application-sql')

//Set up Chai library 
let chai = require('chai');
let should = chai.should();
let assert = chai.assert;
let expect = chai.expect;

app.use(express.static('public'));
//Set up Chai for testing web service
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

//Import the mysql module and create a connection pool with the user details
const mysql = require('mysql');
const connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: "localhost",
    user: "dg",
    password: "123456",
    database: "my_database",
    debug: false
});

//Wrapper for all database tests
describe('Database', () => {

    //Mocha test for getAllAudio method in database module.
    describe('#getAllAudio', () => {
        it('should return all of the audio in the database', (done) => {
            //Mock response object for test
            let response = {};

            /* When there is an error response.staus(ERROR_CODE).json(ERROR_MESSAGE) is called
               Mock object should fail test in this situation. */
            response.status = (errorCode) => {
                return {
                    json: (errorMessage) => {
                        console.log("Error code: " + errorCode + "; Error message: " + errorMessage);
                        assert.fail("Error code: " + errorCode + "; Error message: " + errorMessage);
                        done();
                    }
                }
            };

            //Add send function to mock object
            response.send = (result) => {
                //Convert result to JavaScript object
                connectionPool.query(sqlSelectAudio, (err, result) => {
                    if (err) throw err;
                    response.send(result);
                    console.log(result);
                });
                if (resObj.length > 1) {
                    resObj[0].should.have.property('Name');
                    resObj[0].should.have.property('AudioFile');
                }

                //End of test
                done();
            }

            //Call function that we are testing
            db.getAllAudio(response);
        });
    });

     //Mocha test for getAllAudioPop method in database module.
     describe('#getAllAudioPop', () => {
        it('should return all of the audio in the database', (done) => {
            //Mock response object for test
            let response = {};

            /* When there is an error response.staus(ERROR_CODE).json(ERROR_MESSAGE) is called
               Mock object should fail test in this situation. */
            response.status = (errorCode) => {
                return {
                    json: (errorMessage) => {
                        console.log("Error code: " + errorCode + "; Error message: " + errorMessage);
                        assert.fail("Error code: " + errorCode + "; Error message: " + errorMessage);
                        done();
                    }
                }
            };

            //Add send function to mock object
            response.send = (result) => {
                //Convert result to JavaScript object
                connectionPool.query(sqlSelectAudioPop, (err, result) => {
                    if (err) throw err;
                    response.send(result);
                    console.log(result);
                });
                if (resObj.length > 1) {
                    resObj[0].should.have.property('Name');
                    resObj[0].should.have.property('AudioFile');
                }

                //End of test
                done();
            }

            //Call function that we are testing
            db.getAllAudioPop(response);
        });
    });

     //Mocha test for getAllAudio method in database module.
     describe('#getAllAudioMetal', () => {
        it('should return all of the audio in the database', (done) => {
            //Mock response object for test
            let response = {};

            /* When there is an error response.staus(ERROR_CODE).json(ERROR_MESSAGE) is called
               Mock object should fail test in this situation. */
            response.status = (errorCode) => {
                return {
                    json: (errorMessage) => {
                        console.log("Error code: " + errorCode + "; Error message: " + errorMessage);
                        assert.fail("Error code: " + errorCode + "; Error message: " + errorMessage);
                        done();
                    }
                }
            };

            //Add send function to mock object
            response.send = (result) => {
                //Convert result to JavaScript object
                connectionPool.query(sqlSelectAudioMetal, (err, result) => {
                    if (err) throw err;
                    response.send(result);
                    console.log(result);
                });
                if (resObj.length > 1) {
                    resObj[0].should.have.property('Name');
                    resObj[0].should.have.property('AudioFile');
                }

                //End of test
                done();
            }

            //Call function that we are testing
            db.getAllAudioMetal(response);
        });
    });


         //Mocha test for getAllAudio method in database module.
         describe('#getAllAudioAlt', () => {
            it('should return all of the audio in the database', (done) => {
                //Mock response object for test
                let response = {};
    
                /* When there is an error response.staus(ERROR_CODE).json(ERROR_MESSAGE) is called
                   Mock object should fail test in this situation. */
                response.status = (errorCode) => {
                    return {
                        json: (errorMessage) => {
                            console.log("Error code: " + errorCode + "; Error message: " + errorMessage);
                            assert.fail("Error code: " + errorCode + "; Error message: " + errorMessage);
                            done();
                        }
                    }
                };
    
                //Add send function to mock object
                response.send = (result) => {
                    //Convert result to JavaScript object
                    connectionPool.query(sqlSelectAudioAlt, (err, result) => {
                        if (err) throw err;
                        response.send(result);
                        console.log(result);
                    });
                    if (resObj.length > 1) {
                        resObj[0].should.have.property('Name');
                        resObj[0].should.have.property('AudioFile');
                    }
    
                    //End of test
                    done();
                }
    
                //Call function that we are testing
                db.getAllAudioAlt(response);
            });
        });

     //Mocha test for getAllAudio method in database module.
     describe('#getAllComments', () => {
        it('should return all of the audio in the database', (done) => {
            //Mock response object for test
            let response = {};

            /* When there is an error response.staus(ERROR_CODE).json(ERROR_MESSAGE) is called
               Mock object should fail test in this situation. */
            response.status = (errorCode) => {
                return {
                    json: (errorMessage) => {
                        console.log("Error code: " + errorCode + "; Error message: " + errorMessage);
                        assert.fail("Error code: " + errorCode + "; Error message: " + errorMessage);
                        done();
                    }
                }
            };

            //Add send function to mock object
            response.send = (result) => {
                //Convert result to JavaScript object
                connectionPool.query(sqlSelectComment, (err, result) => {
                    if (err) throw err;
                    response.send(result);
                    console.log(result);
                });
                if (resObj.length > 1) {
                    resObj[0].should.have.property('UserComment');

                }

                //End of test
                done();
            }

            //Call function that we are testing
            db.getAllComments(response);
        });
    });

//Wrapper for all web service tests
describe('Web Service', () => {

    //Test of GET request sent to /customers
    describe('/GET audio', () => {
        it('should GET all the audio', (done) => {
            chai.request(server)
                .get('/audio')
                .end((err, response) => {
                    //Check the status code
                    response.should.have.status(200);

                    //Convert returned JSON to JavaScript object
                    let resObj = JSON.parse(response.text);

                    //Check that an array of customers is returned
                    resObj.should.be.a('array');

                    //Check that appropriate properties are returned
                    if (resObj.length > 1) {
                        resObj[0].should.have.property('name');
                        resObj[0].should.have.property('email');
                        resObj[0].should.have.property('age');
                    }

                    //End test
                    done();
                });
        });
    });
});

});
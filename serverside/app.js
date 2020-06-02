const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const student = require("./models/student");
const inquiry = require("./models/inquiry");
const provider = require("./models/provider");
const appointment = require("./models/appointment");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // can connect from any host.
  res.setHeader("Access-Control-Allow-Methods","GET, POST, DELETE, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  console.log("This line will always called!!");
  next();
});

//connecting with mongodb Atlas
const MONGODB_URI="mongodb+srv://nsultan3:Miki@1234@it6203-project-7czyk.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/IT6203project", { 
   useNewUrlParser: true, 
   useUnifiedTopology: true 
  })
  .then(() => {
    console.log("Mongo DB Successfully Connected.");
  })
  .catch(() => {
    console.log("Error connecting mongo DB.");
  });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/students", (req, res, next) => {
 
  const aStudent = new student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    specialization: req.body.specialization,
    education: req.body.education,
    interest: req.body.interest,
    selfIntro: req.body.selfIntro
  });

  aStudent
    .save()
    .then(() => {
      console.log("A student data has been saved.");
      res.status(201).json("Post has been successful.");
    })
    .catch(err => {
      console.log("Failed to save student data. error: " + err);
      res.status(201).json("Got an error while save: " + err);
    });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/students/:id", (req, res, next) => {
  student
    .deleteOne({ id: req.params.studentId })
    .then(result => {
      console.log(JSON.stringify(result));
      res
        .status(200)
        .json("A student has been Deleted! id: " + req.params.studentId);
    })
    .catch(err => {
      console.log("A error occured while delete: " + err);
    });
});

app.put("/students/:id", (req, res, next) => {
  console.log("Update a Student. ID : " + req.params.id);
  student
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          specialization: req.body.specialization,
          education: req.body.education,
          interest: req.body.interest,
          selfIntro: req.body.selfIntro
        }
      },
      {
        new: true
      }
    )
    .then(updatedStudent => {
      if (updatedStudent) {
        //what was updated
        console.log("Record updated!");
        res
        .status(200)
        .json("An Applicant record has been Updated! Updated Info: " + updatedStudent);
      } else {
        console.log("no data exist for this id");
      }
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/students", (req, res, next) => {
  student
    .find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log("Error:${err}");
      res.status(500).json(err);
    });
});

//Patient inquiry...............................................................//

app.post("/inquirylist", (req, res, next) => {
 
  const aInquiry = new inquiry({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    inquiry: req.body.inquiry,
    rx: req.body.rx
  });

  aInquiry
    .save()
    .then(() => {
      console.log("A Patient inquiry data has been saved.");
      res.status(201).json("Post has been successful.");
    })
    .catch(err => {
      console.log("Failed to save inquiry data. error: " + err);
      res.status(201).json("Got an error while save: " + err);
    });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/inquirylist/:id", (req, res, next) => {
  inquiry.deleteOne({ id: req.params.inquiryId })
    .then(result => {
      console.log(JSON.stringify(result));
      res
        .status(200)
        .json("An inquiry has been Deleted! id: " + req.params.inquiryId);
    })
    .catch(err => {
      console.log("A error occured while delete: " + err);
    });
});

app.put("/inquirylist/:id", (req, res, next) => {
  console.log("Update an inquiry. ID : " + req.params.id);
  inquiry.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          inquiry: req.body.inquiry,
          rx: req.body.rx
        }
      },
      {
        new: true
      }
    )
    .then(updatedInquiry => {
      if (updatedInquiry) {
        //what was updated
        console.log("Record updated!");
        res
        .status(200)
        .json("A patient inquiry record has been Updated! Updated Info: " + updatedInquiry);
      } else {
        console.log("no data exist for this id");
      }
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/inquirylist", (req, res, next) => {
  inquiry.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log("Error:${err}");
      res.status(500).json(err);
    });
});

//Provider...............................................................//

app.post("/providerlist", (req, res, next) => {
 
  const aProvider = new provider({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email
  });

  aProvider
    .save()
    .then(() => {
      console.log("A Provider data has been saved.");
      res.status(201).json("Post has been successful.");
    })
    .catch(err => {
      console.log("Failed to save provider data. error: " + err);
      res.status(201).json("Got an error while save: " + err);
    });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/providerlist/:id", (req, res, next) => {
  provider.deleteOne({ id: req.params.providerid })
    .then(result => {
      console.log(JSON.stringify(result));
      res
        .status(200)
        .json("A Provider has been Deleted! id: " + req.params.providerId);
    })
    .catch(err => {
      console.log("A error occured while delete: " + err);
    });
});

app.put("/providerlist/:id", (req, res, next) => {
  console.log("Update a Provider. ID : " + req.params.id);
  provider.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
          email: req.body.email
        }
      },
      {
        new: true
      }
    )
    .then(updatedProvider => {
      if (updatedProvider) {
        //what was updated
        console.log("Record updated!");
        res
        .status(200)
        .json("A provider record has been Updated! Updated Info: " + updatedProvider);
      } else {
        console.log("no data exist for this id");
      }
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/providerlist", (req, res, next) => {
  provider.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log("Error:${err}");
      res.status(500).json(err);
    });
});

//Patient Appointment...............................................................//

app.post("/appointmentlist", (req, res, next) => {
 
  const aAppointment = new appointment({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    reason: req.body.reason,
    doctor: req.body.doctor,
    date: req.body.date
  });

  aAppointment
    .save()
    .then(() => {
      console.log("A Patient appointment data has been saved.");
      res.status(201).json("Post has been successful.");
    })
    .catch(err => {
      console.log("Failed to save appointment data. error: " + err);
      res.status(201).json("Got an error while save: " + err);
    });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/appointmentlist/:id", (req, res, next) => {
  appointment.deleteOne({ id: req.params.appointmentId })
    .then(result => {
      console.log(JSON.stringify(result));
      res
        .status(200)
        .json("An appointment has been Deleted! id: " + req.params.appointmentId);
    })
    .catch(err => {
      console.log("A error occured while delete: " + err);
    });
});

app.put("/appointmentlist/:id", (req, res, next) => {
  console.log("Update an appointment. ID : " + req.params.id);
  appointment.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          reason: req.body.reason,
          doctor: req.body.doctor,
          date: req.body.date
        }
      },
      {
        new: true
      }
    )
    .then(updatedAppointment => {
      if (updatedAppointment) {
        //what was updated
        console.log("Record updated!");
        res
        .status(200)
        .json("A Patient Appointment record has been Updated! Updated Info: " + updatedAppointment);
      } else {
        console.log("no data exist for this id");
      }
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/appointmentlist", (req, res, next) => {
  appointment.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log("Error:${err}");
      res.status(500).json(err);
    });
});

module.exports = app;


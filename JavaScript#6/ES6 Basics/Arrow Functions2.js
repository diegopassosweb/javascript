const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 3, isActive: false},
];

// const activeJobs = jobs.filter(function(jobs) {return jobs.isActive;});

 const activeJobs = jobs.filter(jobs => jobs.isActive);
 console.log(jobs);
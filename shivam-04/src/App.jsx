import Card from './component/card' 
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHbliDOpYYQdRbXo6Lp5xYKFlxA2AcnCOLA&s",
    companyName: "Google",
    post: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57hcOBfCciRIoQyvIIVjImSAqCEMgnlQ6nQ&s",
    companyName: "Meta",
    post: "Senior React Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9T7qHxpFPse8hXkNHfu43nqCL-lGvj5xNw&s",
    companyName: "Amazon",
    post: "Software Development Engineer",
    datePosted: "3 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnl0smicihjEpIXL3HAI0KWl_CjfgOaPHYg&s",
    companyName: "Apple",
    post: "iOS Developer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHu5xAh5-Yz9QMwVBqgBW5xmRGNbfKKmZXdA&s",
    companyName: "Netflix",
    post: "Backend Engineer",
    datePosted: "10 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG20zHjiZTp54nUhQC_A_RPkRGylGz65LhA&s",
    companyName: "Microsoft",
    post: "Cloud Engineer",
    datePosted: "4 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyfNxpFrBYUWh1hFkFQiTX10bOtKwQ7wBvQ&s",
    companyName: "NVIDIA",
    post: "AI/ML Intern",
    datePosted: "6 days ago",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$30/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSPy2oZU9GwfUwqb1VYQE3aZuzGlszay0Eg&s",
    companyName: "OpenAI",
    post: "Machine Learning Engineer",
    datePosted: "8 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5mklNAF6OBCvTBD6Eai9lIerF8sPvXsnaA&s",
    companyName: "Uber",
    post: "Data Engineer",
    datePosted: "7 weeks ago",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxIpi1R9rfGgDfXuEttcoXVDnaL9gy1sF6Q&s",
    companyName: "Adobe",
    post: "Full Stack Developer",
    datePosted: "10 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Noida, India"
  }
];
  console.log(jobOpenings);
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key = 'idx'><Card company={elem.companyName} post={elem.post} tag1={elem.tag1} pay={elem.pay} datePosted={elem.datePosted} brandLogo={elem.brandLogo} tag2={elem.tag2}/></div>
      })}
    </div>
  )
}

export default App


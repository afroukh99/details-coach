import React from 'react'
import Feedback from '../../components/Feedback'
import Review from '../../components/Review';
import WriteReview from '../../components/WriteReview';



const reviews = [
  {
    name: "Nicolas Cage",
    profilePic: "",
    createdAt: "2024-10-20",
    title: "Great Product",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    starsNum: 5
  },
  {
    name: "Emma Stone",
    profilePic: "",
    createdAt: "2024-10-18",
    title: "Very Useful",
    desc: "I was pleasantly surprised by how effective this product is. Highly recommend it to anyone looking for quality.",
    starsNum: 4
  },
  {
    name: "Chris Evans",
    profilePic: "",
    createdAt: "2024-10-16",
    title: "Satisfactory",
    desc: "It does the job, but there are some minor issues. Overall, I'm happy with the purchase.",
    starsNum: 3
  },
  {
    name: "Scarlett Johansson",
    profilePic: "",
    createdAt: "2024-10-14",
    title: "Excellent Quality",
    desc: "The product exceeded my expectations. The quality is top-notch and the design is sleek.",
    starsNum: 5
  },
  {
    name: "Robert Downey Jr.",
    profilePic: "",
    createdAt: "2024-10-12",
    title: "Worth the Price",
    desc: "Although it's on the pricier side, this product is definitely worth the investment.",
    starsNum: 4
  }
];


const Reviews = () => {
  return (
    <div className='flex flex-col gap-14  w-full min-h-full font-inter'>
      <Feedback />
      <section className='flex flex-col gap-8'>
        {
          reviews.map((review, index) => (
            <Review review={review} key={index} />
          ))
        }
      </section>
      <span className='text-red-500 text-small-300 underline cursor-pointer text-center'>View All Reviews</span>
      <WriteReview />
    </div>
  )
}

export default Reviews
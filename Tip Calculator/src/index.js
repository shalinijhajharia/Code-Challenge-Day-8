// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:


// Write the function to find the calculateTip obtained.
function calculateTip(amount, rating) {
    //your code here
    if(rating.toLowerCase()==="terrible")
    {
      return 0;
    }
    else if(rating.toLowerCase()==="poor")
    {
      return Math.ceil(amount*(0.05));
    }
    else if(rating.toLowerCase()==="good")
    {
      return Math.ceil(amount*(0.1));
    }
    else if (rating.toLowerCase()==="great")
    {
      return Math.ceil(amount*(0.15))
    }
    else if(rating.toLowerCase()==="excellent")
    {
      return Math.ceil(amount*(0.2));
    }
    return "Rating not recognised";
  }

//Use SpecRunner to check the Test Cases.
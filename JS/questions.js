// Main questions file that combines all category modules

// For browser environment, we'll use the objects created
// in the individual files through window.quizData 

// Initialize the questions database object
const questionsDb = {
    "lens-2017": window.quizData?.lens2017 || [],
    "lens-2018": [],
    "lens-2019": [],
    "glaucoma-2017": window.quizData?.glaucoma2017 || [],
    "glaucoma-2018": [],
    "glaucoma-2019": [],
    "retina-2017": window.quizData?.retina2017 || [],
    "retina-2018": [],
    "retina-2019": [],
    "fundamentals-2017": window.quizData?.fundamentals2017 || [],
    "fundamentals-2018": [],
    "fundamentals-2019": []
};
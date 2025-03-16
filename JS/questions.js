// Main questions file that combines all category modules

// For browser environment, we'll use the objects created
// in the individual files through window.quizData 

// Initialize the questions database object
const questionsDb = {
    // Lens/Cataract category
    "lens-2017": window.quizData?.lens2017 || [],
    "lens-2018": [],
    "lens-2019": [],
    
    // Glaucoma category
    "glaucoma-2017": window.quizData?.glaucoma2017 || [],
    "glaucoma-2018": [],
    "glaucoma-2019": [],
    
    // Retina category
    "retina-2017": window.quizData?.retina2017 || [],
    "retina-2018": [],
    "retina-2019": [],
    
    // Fundamentals category
    "fundamentals-2017": window.quizData?.fundamentals2017 || [],
    "fundamentals-2018": [],
    "fundamentals-2019": [],
    
    // Other categories - placeholders for future content
    "optics-2017": [],
    "optics-2018": [],
    "optics-2019": [],
    
    "pathology-2017": [],
    "pathology-2018": [],
    "pathology-2019": [],
    
    "neuro-2017": [],
    "neuro-2018": [],
    "neuro-2019": [],
    
    "pediatrics-2017": [],
    "pediatrics-2018": [],
    "pediatrics-2019": [],
    
    "oculoplastics-2017": [],
    "oculoplastics-2018": [],
    "oculoplastics-2019": [],
    
    "cornea-2017": [],
    "cornea-2018": [],
    "cornea-2019": [],
    
    "uveitis-2017": [],
    "uveitis-2018": [],
    "uveitis-2019": [],
    
    "refractive-2017": [],
    "refractive-2018": [],
    "refractive-2019": []
};

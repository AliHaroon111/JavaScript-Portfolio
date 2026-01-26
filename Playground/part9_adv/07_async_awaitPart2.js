// 
function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data Fetched")
        }, 2000);
    })
}

function fecthCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched succesfully")
        }, 3000);
    })
}

async function getBlogdata() {
    try {
        console.log("Fetching Blog data...........");
        // const blogdata = await fetchPostData()
        // const CommentData = await  fecthCommentData()
        // Thier a better than above to handle multiple promise see below
        const [blogData,commentData]= await Promise.all([fetchPostData(),fecthCommentData()])
        // Here we use List because we have to handle 2 variables
        console.log(blogData);
        console.log(commentData);
        console.log("Fetching data");
        
    } catch (error) {
        console.log("Error fetching ");
        
    }
    
}

getBlogdata()
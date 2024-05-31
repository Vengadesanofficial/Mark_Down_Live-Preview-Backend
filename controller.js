//controllers componenet
import { marked } from "marked";

 const convertMarkdownHtml = (req,res)=>{
  const markdownText = req.body.markdown;
  const html = marked(markdownText);
  res.send({html});
}

export default convertMarkdownHtml
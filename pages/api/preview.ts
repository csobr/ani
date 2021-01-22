// export default async (req, res) => {
//   req.setPreview({});
//   req.end('Preview mode enabled');

//   if (req.query.secret !== 'PREVIEW_URL' || !req.query.slug) {
//     return res.status(401).json({message: 'Invalid token'});
//   }
//   const post = await getPostBySlug(req.query.slug);

//   if (!post) {
//     return res.status(401).json({message: 'Invalid slug'});
//   }

//   res.setPreviewData({});

//   res.redirect(post.slug);
//   res.clearPreviewData();
// };

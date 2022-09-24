import mongoose from 'mongoose';

// create post schema
const postSchema = mongoose.Schema({
	user: String,
    title: String,
	content: String,
	tags: [String],
    selectedFile: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

// schema -> model
const PostModel = mongoose.model('PostModel', postSchema);

export default PostModel;

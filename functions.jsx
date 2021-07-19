module.exports = {

	getFlatPosts: posts => {
		let flatPosts = [];

		Object.keys( posts ).map( category => {
			const values = Object.values( posts[ category ] );

			values.map( slug => {
				flatPosts.push( slug );
			} );
		} );

		return flatPosts;
	},

	getPostCategory: ( post, posts ) => {
		let category = null;

		Object.keys( posts ).map( cat => {
			const values = Object.values( posts[ cat ] );

			values.map( slug => {
				if ( slug === post ) {
					category = cat;
				}
			} );
		} );

		return category || post;
	},

	fetchPostTextThen: ( slug, t ) => {

		fetch( `../content/md/posts/${slug}.md` )
			.then( response => response.text() )
			.then( text => t( text ) );
	},
};

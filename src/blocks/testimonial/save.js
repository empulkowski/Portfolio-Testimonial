/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {RichText, useBlockProps, PlainText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	return (
		<div {...useBlockProps.save()}>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="testimonial-card">
						<div className="row">
							<div className="col-md-3">
								<img src={attributes.imgUrl} alt="Photo of Eric Foreman"/>
							</div>
							<div className="col-md-9">
								<RichText.Content className="client"
												  tagName="div"
												  value={attributes.client} />
								<RichText.Content className="title"
												  value={attributes.title} />

								<div class="saywhat">
								<p><i className="fas fa-quote-left"></i>
									<PlainText className="author"

											   value={attributes.saywhat}
											   onChange={saywhat => setAttributes({saywhat})}
									/>
									<i className="fas fa-quote-right"></i></p>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

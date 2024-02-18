/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<p {...useBlockProps.save()}>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="testimonial-card">
						<div className="row">
							<div className="col-md-3">
								<img src="#" alt="Client" className="rounded-circle"/>
							</div>
							<div className="col-md-9">
								<h5>Client Name</h5>
								<p>CEO, Company Name</p>
								<p><i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam. <i className="fas fa-quote-right"></i></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</p>
	);
}

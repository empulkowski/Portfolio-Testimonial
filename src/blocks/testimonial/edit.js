/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="testimonial-card">
						<div className="row">
							<div className="col-md-3">
								<img src="#" alt="Client" className="rounded-circle" />
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
		</div>
	);
}

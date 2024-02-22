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
import {useBlockProps, RichText, MediaUpload, MediaUploadCheck, PlainText} from '@wordpress/block-editor';

import './editor.scss';
import {SelectControl} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	// const attributes = props.attributes;
	// const {attributes, setAttributes} = props;
	return (
		<div {...useBlockProps()}>
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<div className="card border-0 shadow">
							<div className="card-body">
								<div className="row align-items-center">
									<div className="col-md-3">
										<MediaUploadCheck>
											<MediaUpload
												allowedTypes={['image']}
												onSelect={ file => {
													console.log(file);
													setAttributes({imgUrl: file.sizes.thumbnail.url});
												}
												}
												render={({open})=> <img src={attributes.imgUrl}
																		alt="Upload a photo"
																		onClick={open}
												/>}
											/>
										</MediaUploadCheck>

									</div>

									<div className="col-md-9">
										<RichText
											className="client"
											tagName="div"
											placeholder="Client Name"
											value={attributes.client}
											onChange={(client) => setAttributes({client})}
										/>

										<RichText
											className="title"
											placeholder="Job Title"
											value={attributes.title}
											onChange={(title) => setAttributes({title})}
										/>
										<i className="fas fa-quote-left"></i>
										<PlainText className="saywhat"
												   placeholder="oranges lend their bright, citrusy essence to a myriad of culinary creations with a burst of sunshine and zest. let the citrusy goodness of oranges brighten your day.
. "
												   value={attributes.saywhat}
												   onChange={saywhat => setAttributes({saywhat})}
										/>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

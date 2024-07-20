import PropTypes from 'prop-types'
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
export default function RHFLoadingButton({isLoading = false, loadingIndicator = "Loading...", content, forForm, onSubmit, ...props}){
	return <LoadingButton type="submit" 
			form={forForm}
			loading={isLoading}
			onSubmit={onSubmit}
			loadingIndicator={loadingIndicator}
			{...props}>
			{content}
	</LoadingButton>
}

RHFLoadingButton.propTypes = {
	content: PropTypes.string,
	name: PropTypes.string,
	onSubmit: PropTypes.func
}
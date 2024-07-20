import { Card, CardHeader, Stack, Container } from '@mui/material'
import ResultContent from './ResultContent';

// ----------------------------------------------------------------------

const PADDING = 2

export default function ResultCard({
    cardTitle = "",
    isError = false,
    title = "Has error occurred",
    content = "Please try again",
    action
}) {

    return (
        <Container maxWidth={"md"}>
            <Card sx={{ width: 1 }}>
                <CardHeader
                    title={cardTitle}
                    sx={{
                        padding: theme => `${theme.spacing(PADDING, PADDING, 0)} !important`,
                    }}
                />
                <ResultContent
                    isError={isError}
                    title={title}
                    content={content}
                    sx={{ px: PADDING }}
                />
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    width={1} p={PADDING} spacing={2}>
                    {action}
                </Stack>
            </Card>
        </Container>
    )
}
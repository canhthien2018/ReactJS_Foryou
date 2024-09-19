import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ClassDocs({docs}) {
    return (
        <Box sx={{ pt: 2, pb: 2, pr: { xs: 0, md: 2 }, pl: { xs: 0, md: 2 }, }}>
            <Box sx={{ display: 'flex', mb: 1, justifyContent: 'flex-end' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pr: 2, mb: 2 }}>
                    <Button variant='outlined' color='success' size='small'>Add</Button>
                </Box>
            </Box>
            <List >
                {docs.map((doc, index) => (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="delete" >
                                    <DeleteIcon fontSize='small' />
                                </IconButton>
                            </>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <ArticleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <>
                                    <Typography fontSize={13} sx={{ cursor: 'pointer' }}>{doc.title}</Typography>
                                </>
                            }
                            secondary={
                                <Typography fontSize={12} sx={{ cursor: 'pointer', color: th => th.palette.grey[500] }}>{`${doc.size} MB`}</Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default ClassDocs

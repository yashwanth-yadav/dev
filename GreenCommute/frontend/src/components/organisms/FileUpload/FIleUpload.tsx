/**
 * @author Shubham Kukreti <shubham.kukreti@zemosolabs.com>
 */

 import { Box, IconButton, Modal } from '@mui/material';
 import React, { useState } from 'react';
 import theme from '../../../theme';
 import { close } from '../../../utils/constants';
 import Icons from '../../atoms/Icons/Icons';
 import BeforeUpload from './BeforeUpload';
 import AfterUpload from './AfterUpload';
 
 interface Props {
   open: boolean;
   setFileUploadOpen: React.Dispatch<React.SetStateAction<boolean>>;
 }
 
 const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: theme.spacing(175),
   height: theme.spacing(100),
   borderRadius: theme.spacing(3),
   bgcolor: 'gammaWhite.main',
   boxShadow: 24,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'
 };
 
 const FileUpload = ({ open, setFileUploadOpen }: Props) => {
   const [openFileUpload, setOpenFileUpload] = useState(open);
   const [uploadSuccess, setUploadSuccess] = useState(false);
   const handleClose = () => {
     setOpenFileUpload(false);
     setFileUploadOpen(false);
   };
   const handleUploadSuccess = () => setUploadSuccess(true);
   return (
     <>
       <Modal open={openFileUpload}>
         <Box sx={style}>
           <IconButton
             onClick={handleClose}
             sx={{ position: 'absolute', left: '94%', top: '2%' }}
           >
             <Icons icon={close} />
           </IconButton>
           {!uploadSuccess ? (
             <BeforeUpload handleUploadSuccess={handleUploadSuccess} />
           ) : (
             <AfterUpload handleClose={handleClose} />
           )}
         </Box>
       </Modal>
     </>
   );
 };
 
 export default FileUpload;
 
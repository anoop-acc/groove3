import React from 'react';
import 'antd/dist/antd.css';
 
import { InboxOutlined } from '@ant-design/icons';

import { message, Upload } from 'antd';
import { ReactComponent as FileUpload} from '../../groovelibrary/FontAwesomeIconLibrary/regular/file-arrow-up.svg';
 

const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Fileupload = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <FileUpload />       
    </p>
    <span>
    <p className="ant-upload-text">Drag and drop</p>
    <p className="ant-upload-hint">
    Drop any .pdf, .doc, .exe, or <b>browse your files.</b>
    </p>
    </span>
  </Dragger>
);

export default Fileupload;
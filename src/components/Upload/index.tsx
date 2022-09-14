import React, { useState } from 'react';
import * as S from './styles';

import { useDropzone } from 'react-dropzone';
import { formatBytes } from '../../utils/formatBytes';
import { ButtonComponent } from '../ButtonComponent';
import { Alert } from '../Alert';
import { Box, IconButton, CardMedia } from '@mui/material';
import { UploadProps, FileBlob } from './Upload.types';

export function Upload({
  title,
  maxFiles = 1,
  maxSize,
  accept,
  height = 160,
  width = '100%',
  setFiles,
  files,
  required,
  placeholder,
}: UploadProps) {
  const [showAlert, setShowAlert] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: maxFiles,
    maxSize: maxSize,
    
    onDrop: async (acceptedFiles: Blob[]) => {
      await editObjectWithBase64(acceptedFiles);
    },
    onDropRejected: () => {
      setShowAlert(true);
    }
  });

  const editObjectWithBase64 = async (acceptedFiles: FileBlob[]) => {
    const filesArray = [...files];
    for (const file of acceptedFiles) {
      if (filesArray.length < maxFiles) {
        await getBase64(file).then((res: any) => {
          const tempObj = { ...file };
          if (file.name === res.fileName) {
            tempObj['base64'] = res.base64;
            filesArray.push({
              nome: file.name,
              conteudoBase64: tempObj.base64,
              preview: URL.createObjectURL(file),
              size: formatBytes(file.size),
              id: Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
            });
          }
        });
      } else {
        setShowAlert(true);
      }
    }

    setFiles(filesArray);
  };

  const getBase64 = async (file: any) => {
    const fileBlob = new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () =>
        resolve({
          fileName: file.name,
          base64: reader.result
        });
      reader.onerror = reject;
    });
    return fileBlob as Promise<FileBlob[]>;
  };

  const deleteFile = (id: string | number | undefined) => {
    const filesCopy = [...files];
    const index = filesCopy.findIndex(({ id: findId }) => findId === id);
    filesCopy.splice(index, 1);
    setFiles(filesCopy);
  };

  return (
    
      <Box>
        <S.StyledTypographyTitle required={required}>
          {title}
        </S.StyledTypographyTitle>
        <S.StyledBoxContainer height={height} width={width} {...getRootProps()}>
          <input {...getInputProps()} />
          <S.StyledIconContainer />
          <S.StyledTypographyContainer>
            Arraste e solte o arquivo aqui
          </S.StyledTypographyContainer>
          <ButtonComponent title="SELECIONAR ARQUIVO" themeColor="#7a0000" />
        </S.StyledBoxContainer>
        <S.StyledTypographySize>
          {placeholder} Peso máximo: {formatBytes(maxSize)}.
        </S.StyledTypographySize>
        <S.StyledList>
          <Box>
            {files?.length > 0 &&
              files?.map(({ nome, conteudoBase64, size, id }) => (
                <S.StyledBoxCardContainer key={id}>
                  <S.StyledCard>
                    {nome?.includes('pdf') ? (
                      <S.StyledDocumentIcon />
                    ) : (
                      <CardMedia
                        component="img"
                        image={conteudoBase64}
                        id="output"
                        draggable="false"
                      />
                    )}
                  </S.StyledCard>
                  <S.StyledBoxPreview>
                    <S.StyledTypographyName>
                      {nome && nome}
                    </S.StyledTypographyName>
                    <S.StyledTypographySize>
                      {size && `(${size})`}
                    </S.StyledTypographySize>
                  </S.StyledBoxPreview>
                  <S.StyledBoxIcon onClick={() => deleteFile(id)}>
                    <IconButton>
                      <S.StyledTrashIcon />
                    </IconButton>
                  </S.StyledBoxIcon>
                </S.StyledBoxCardContainer>
              ))}
          </Box>
        </S.StyledList>
        <Alert
          message={'Formato do arquivo está incorreto.'}
          type={'error'}
          variant={'filled'}
          closeButton={true}
          alertStatus={showAlert}
          setAlertStatus={setShowAlert}
        />
      </Box>
   
  );
}
import React from 'react';
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {SubmitButton} from "ui/buttons"
import {
  EditorFeedBackStyles,
  FeedBackMessage,
  FeedBack,
  FeedBackOption
} from './styles'

function EditorFeedBack ({children,status, writeCompleted, ...props})  {
        const navigator = useNavigate()
  return (
      <EditorFeedBackStyles  {...props}>
          {
            !status
            ?
            <FeedBack>
            <AiOutlineCheckCircle color="d9f99d" size="12rem"/>
            <FeedBackMessage>
              Product Uploaded Successfully
            </FeedBackMessage>
          </FeedBack>
          :
          <FeedBack>
            <AiOutlineCloudUpload color="d9f99d" size="12rem"/>
            <FeedBackMessage>
            Uploading New Product
            </FeedBackMessage>
          </FeedBack>
          }

          <FeedBackOption>
              <SubmitButton 
              onClick={()=> writeCompleted(false)}
              disabled={status}
              >Add Another Product</SubmitButton>
              <SubmitButton 
              onClick={()=> navigator('/dashboard')}
              >View All Products</SubmitButton>
          </FeedBackOption>

        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack
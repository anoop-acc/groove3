import React from 'react';

function Links(props) {

const codeLinks =`<a href="#" class="link-groove  link-blue">Primary link</a>
<a href="#" class="link-groove  link-primary">Primary link</a>
<a href="#" class="link-groove  link-dark">Primary link</a>
<a href="#" class="link-groove  link-gray">Primary link</a>`


    return (
        <div>
  <h2>Links</h2>
  <h4>Default State </h4>
                    <div className='border p-2 px-5 d-flex justify-content-between'>
                       
                        <a href="#" class="link-groove  link-blue">Primary link</a>
                        <a href="#" class="link-groove  link-primary">Primary link</a>
                        <a href="#" class="link-groove  link-dark">Primary link</a>
                        <a href="#" class="link-groove  link-gray">Primary link</a>
                    </div>
                    <h4 className='mt-4'>Hover/Focus State</h4>
                    <div className='border p-2 px-5 d-flex justify-content-between'>
                       
                        <a href="#" class="link-groove active link-blue">Primary link</a>
                        <a href="#" class="link-groove active link-primary">Primary link</a>
                        <a href="#" class="link-groove active link-dark">Primary link</a>
                        <a href="#" class="link-groove active link-gray">Primary link</a>
                    </div>

                    <pre className='codeview my-3'>
            <code className='cmt'>{ }</code>                       
            <code>{codeLinks}</code>
          </pre>
            
        </div>
    );
}

export default Links;



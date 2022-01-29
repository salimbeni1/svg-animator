


export const importImage = (e) => {
        e.stopPropagation()
        e.preventDefault()
        const file = (e.type === 'drop') ? e.dataTransfer.files[0] : e.currentTarget.files[0]
        if (!file) { return }
        if (!file.type.includes('image')) { return }
        // Detected an image
        // svg handling
        let reader
        if (file.type.includes('svg')) {
          reader = new FileReader()
          reader.onloadend = (ev) => {
            const newElement = canvas.importSvgString(ev.target.result, true)
            newElement.setAttribute("transform","")
            console.log(newElement);
            canvas.alignSelectedElements('m', 'page')
            canvas.alignSelectedElements('c', 'page')
            // highlight imported element, otherwise we get strange empty selectbox
            canvas.selectOnly([newElement])
          }
          reader.readAsText(file)
        } else {
          // bitmap handling
          reader = new FileReader()
          reader.onloadend = function ({ target: { result } }) {
            const insertNewImage = (imageWidth, imageHeight) => {
              const newImage = canvas.addSVGElementsFromJson({
                element: 'image',
                attr: {
                  x: 0,
                  y: 0,
                  width: imageWidth,
                  height: imageHeight,
                  id: canvas.getNextId(),
                  style: 'pointer-events:inherit'
                }
              })
              canvas.setHref(newImage, result)
              canvas.selectOnly([newImage])
              canvas.alignSelectedElements('m', 'page')
              canvas.alignSelectedElements('c', 'page')
              this.topPanel.updateContextPanel()
            }
            // create dummy img so we know the default dimensions
            let imgWidth = 100
            let imgHeight = 100
            const img = new Image()
            img.style.opacity = 0
            img.addEventListener('load', () => {
              imgWidth = img.offsetWidth || img.naturalWidth || img.width
              imgHeight = img.offsetHeight || img.naturalHeight || img.height
              insertNewImage(imgWidth, imgHeight)
            })
            img.src = result
          }
          reader.readAsDataURL(file)
        }
      }

export const deleteSelectedElementAnimation = () => {
    const delete_animation = (arr) => {
        if(arr === undefined) return;
        //console.log(arr);
        arr.forEach((el , i) =>{
            //console.log(el);
            if(el.tagName === "g"){
                delete_animation(arr.childNodes)
            }
            // TODO ; may delete group
            else el.replaceChildren();
    })}

    delete_animation(canvas.getSelectedElements())
  }
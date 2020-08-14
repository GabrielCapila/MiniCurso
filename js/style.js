

const css = `<style>
      *{
        margin: 0;
        padding: 0;
        border: none;
      }
      body{
        background-color: #2C3A47;
        display: flex;
        align-items: center;
        height: 100vh;
        justify-content: center;
      }
      #root{
        background-color: #3B3B98;
        font-family: 'Press Start 2P', cursive;
        height: 65vh;
        width: 40vw;
        text-align: center;
        padding-top: 5rem;
      }
    </style>`

const head = document.querySelector('head');

head.insertAdjacentHTML('beforeend', css)
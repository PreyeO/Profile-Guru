<template>
  <footer class='footer'>
    <h5>&copy; 2022 Preye Omusuku PDev<span className='logo-span'> /></span>, All rights reserved</h5>
    </footer>
</template>

<style scoped>
.footer{
  color: #c1b4b4;
  text-align: center;
  padding-top: 5rem;
  font-size: 1.5rem;
}
.footer span{
  color: var(--color-primary)
}

@media screen and (max-width: 500px) {
  .footer{
    font-size: 1.2rem;
  }
}
</style>
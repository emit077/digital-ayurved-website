<template>
  <div class='text-center'>
    <ConstructionImg class='construction-img mt-5' />
    <h2 class='text-head-primary mb-0'>Website is under construction</h2>
    <h1 class='text-secondary my-0' style='font-size: 35px'>COMING SOON</h1>
    <p class='text-head-primary mt-n2' style='letter-spacing: 2.6px'>NEW SITE NEW JOURNEY</p>
    <a class='login-btn mt-3' href='https://app.digitalayurved.in/'>Login</a>
  </div>
</template>
<style scoped>
.construction-img {
  width: 70%;
  text-align: center;
}

.text-head-primary {
  color: #415B91;
  font-weight: bold;
}

.text-secondary {
  color: #B6D0FB;
  font-weight: bold;
  letter-spacing: 1px;
}

.login-btn {
  display: inline-block;
  border: solid 1px #415B91;
  color: #415B91;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  padding: 7px 35px;
  transition-duration: 1s;
}

.login-btn:hover {
  transform: scale(1.1);
  background-color: #415B91;
  color: white;

}
</style>
<script>
export default {
  name: 'IndexPage'
}
</script>

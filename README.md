Banana - Trading: Realtid server
========================================
# Krav 3: Realtid
Applikationen snurrar precis som backend-api:et på en nginx-server som är installerad på en droplet på Digital Ocean. Även här har jag valt ett node-js baserat ramverk - Express för att bygga applikationen på.
Socket.io används för att upprätta en direktkoppling mellan serven och klienten.

Var 5:sekund hämtas det lägst och det högsta priset som bananerna säljs för på trading-marknaden och med samma interval förmedlas samma information ut till de uppkopplade klienterna.

Klientdel förklaras tillsammans med den övriga frontend delen.

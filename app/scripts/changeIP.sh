# Atribuindo p1
iface="$1"
# Atribuindo p2
address="$2"
# Atribuindo p3
netmask="$3"
# Atribuindo p3
gateway="$3"

echo "executando mudanca de IP..."

echo `auto eth0
iface eth0 inet static
address ${address}
netmask ${netmask}
gateway ${gateway}`

#> /etc/network/interfaces
echo ""
echo "concluido!"
#/etc/init.d/networking restart

#echo `auto eth0
#iface eth0 inet static
#address 192.168.1.30
#netmask 255.255.255.0
#gateway 192.168.1.6`

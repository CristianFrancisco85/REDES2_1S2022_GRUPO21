# Topologia 

## VLANS


| VLAN   | Nombre            |
|--------|-------------------|
| 13     | Ventas            |
| 23     | Distribucion      |
| 33     | Administracion    |
| 43     | Servidores        |
| 99     | Management&Native |
| 999    | Black Hole        |


## VTP 

Dominio y Password:  g21

| Switch | Modo   |
|--------|--------|
| S0     | Server |
| S1     | Client |
| S2     | Client |
| S3     | Client |
| S4     | Client |
| S5     | Client |
| S6     | Client |


## Tabla Subredes

Aprovechamiento del 71% de 192.168.83.0/24

| VLAN | Hosts | IP de Red          | Mascara         | Primer Host    | Ultimo Host    | Broadcast      |
|------|-------|--------------------|-----------------|----------------|----------------|----------------|
| 13   | 30    | 192.168.83.0 /27   | 255.255.255.224 | 192.168.83.1   | 192.168.83.30  | 192.168.83.31  |
| 23   | 30    | 192.168.83.32 /27  | 255.255.255.224 | 192.168.83.33  | 192.168.83.62  | 192.168.83.63  |
| 33   | 30    | 192.168.83.64 /27  | 255.255.255.224 | 192.168.83.65  | 192.168.83.94  | 192.168.83.95  |
| 43   | 30    | 192.168.83.96 /27  | 255.255.255.224 | 192.168.83.97  | 192.168.83.126 | 192.168.83.127 |
| 99   | 30    | 192.168.83.128 /27 | 255.255.255.224 | 92.168.83.129  | 192.168.83.158 | 192.168.83.159 |
| 999  | 30    | 192.168.83.160 /27 | 255.255.255.224 | 192.168.83.161 | 192.168.83.190 | 192.168.83.191 |

## Configuracion de Hosts 

| HOST            | VLAN | IP            | MASK            | GATEWAY       |
|-----------------|------|---------------|-----------------|---------------|
| VENTAS1         | 13   | 192.168.83.2  | 255.255.255.224 | 192.168.83.1  |
| VENTAS2         | 13   | 192.168.83.3  | 255.255.255.224 | 192.168.83.1  |
| VENTAS3         | 13   | 192.168.83.4  | 255.255.255.224 | 192.168.83.1  |
| DISTRIBUCION1   | 23   | 192.168.83.34 | 255.255.255.224 | 192.168.83.33 |
| DISTRIBUCION2   | 23   | 192.168.83.35 | 255.255.255.224 | 192.168.83.33 |
| DISTRIBUCION2   | 23   | 192.168.83.36 | 255.255.255.224 | 192.168.83.33 |
| ADMINISTRACION1 | 33   | 192.168.83.66 | 255.255.255.224 | 192.168.83.65 |
| ADMINISTRACION2 | 33   | 192.168.83.67 | 255.255.255.224 | 192.168.83.65 |
| SERVIDOR1       | 43   | 192.168.83.98 | 255.255.255.224 | 192.168.83.97 |
| SERVIDOR2       | 43   | 192.168.83.99 | 255.255.255.224 | 192.168.83.97 |


## Configuraciones Dispositivos

### Switch R0 

VTP, VLAN y Routing:
```
config t
vlan 13
name ventas
exit

vlan 23
name distribucion
exit

vlan 33
name administracion
exit

vlan 43
name servidores
exit

vlan 99
name management&native
exit

vlan 999
name blackhole
exit

vtp domain g21
vtp password g21
vtp mode server
vtp version 2

interface vlan 13
ip add 192.168.83.1 255.255.255.224
no shutdown
exit

interface vlan 23
ip add 192.168.83.33 255.255.255.224
no shutdown
exit

interface vlan 33
ip add 192.168.83.65 255.255.255.224
no shutdown
exit

interface vlan 43
ip add 192.168.83.97 255.255.255.224
no shutdown
exit

ip routing


```

Seguridad de interfaces:
```
config t
int range f0/3 - 24
switchport mode access
switchport access vlan 999
exit

int range f0/1 - 2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport nonegotiate
switchport trunk native vlan 99
switchport trunk allowed vlan 1,13,23,33,43,99,999,1002-1005
exit


```


### Switch S0

VLAN y EtherChannel:
```
config t
int range f0/1 - 6
switchport mode trunk
switchport trunk allowed vlan 1,13,23,33,43,99,999,1002-1005
exit

vtp domain g21
vtp password g21
vtp mode client

interface f0/7
switchport mode access
switchport access vlan 13
exit

interface f0/8
switchport mode access
switchport access vlan 23
exit

int range f0/2 - 3
channel-protocol lacp
channel-group 1 mode active
exit

int range f0/5 - 6
channel-protocol lacp
channel-group 3 mode active
exit

```

Seguridad de interfaces:
```
config t
int range f0/9 - 24
switchport mode access
switchport access vlan 999
exit

int range f0/1 - 6
switchport trunk native vlan 99
exit

interface f0/7
switchport port-security
switchport port-security maximum 5
switchport port-security mac-address sticky
exit

interface f0/8
switchport port-security
switchport port-security maximum 1
switchport port-security mac-address sticky
switchport port-security violation shutdown
exit

```

### Switch S1

VTP, VLAN y EtherChannel:
```
config t
int range f0/1 - 8
switchport mode trunk
switchport trunk allowed vlan 1,13,23,33,43,99,999,1002-1005
exit

vtp domain g21
vtp password g21
vtp mode client

int range f0/2 - 3
channel-protocol lacp
channel-group 1 mode active
exit

int range f0/4 - 5
channel-protocol lacp
channel-group 2 mode active
exit

int range f0/7 - 8
channel-protocol lacp
channel-group 5 mode active
exit

```

Seguridad de interfaces:
```
config t
int range f0/9 - 24
switchport mode access
switchport access vlan 999
exit

int range f0/1 - 8
switchport trunk native vlan 99
exit

```

### Switch S2

VTP, VLAN y EtherChannel:
```
config t
int range f0/1 - 6
switchport mode trunk
switchport trunk allowed vlan 1,13,23,33,43,99,999,1002-1005
exit

vtp domain g21
vtp password g21
vtp mode client

interface f0/7
switchport mode access
switchport access vlan 33
exit

interface f0/8
switchport mode access
switchport access vlan 23
exit

int range f0/4 - 5
channel-protocol lacp
channel-group 2 mode active
exit

int range f0/2 - 3
channel-protocol lacp
channel-group 4 mode active
exit

```

Seguridad de interfaces:
```
config t
int range f0/9 - 24
switchport mode access
switchport access vlan 999
exit

int range f0/1 - 6
switchport trunk native vlan 99
exit

int range f0/7 - 8
switchport port-security
switchport port-security maximum 1
switchport port-security mac-address sticky
switchport port-security violation shutdown
exit

```

### Switch S3

VTP y VLAN:
```
config t
int range f0/1,f0/4,f0/6
switchport mode trunk
switchport trunk allowed vlan 1,13,23,33,43,99,999,1002-1005
exit

vtp domain g21
vtp password g21
vtp mode client

interface f0/2
switchport mode access
switchport access vlan 43
exit

interface f0/3
switchport mode access
switchport access vlan 13
exit

```

Seguridad de interfaces:
```
config t
int range f0/7 - 24,f0/5
switchport mode access
switchport access vlan 999
exit

int range f0/1,f0/4,f0/6
switchport trunk native vlan 99
exit

interface f0/3
switchport port-security
switchport port-security maximum 5
switchport port-security mac-address sticky
exit

```

### Switch S4

VTP, VLAN y EtherChannel:
```
config t
int range f0/1 - 8
switchport mode trunk
switchport trunk allowed vlan 1,13,23,33,43,99,999,1002-1005
exit

vtp domain g21
vtp password g21
vtp mode client

interface f0/9
switchport mode access
switchport access vlan 23
exit

interface f0/10
switchport mode access
switchport access vlan 33
exit

int range f0/5 - 6
channel-protocol lacp
channel-group 3 mode active
exit

int range f0/2 - 3
channel-protocol lacp
channel-group 4 mode active
exit

int range f0/7 - 8
channel-protocol lacp
channel-group 5 mode active
exit

```

Seguridad de interfaces:
```
config t
int range f0/11 - 24
switchport mode access
switchport access vlan 999
exit

int range f0/1 - 8
switchport trunk native vlan 99
exit

int range f0/9 - 10
switchport port-security
switchport port-security maximum 1
switchport port-security mac-address sticky
switchport port-security violation shutdown
exit

```

### Switch S5

VTP y VLAN:
```
config t
int range f0/1,f0/4,f0/6
switchport mode trunk
switchport trunk allowed vlan 1,13,23,33,43,99,999,1002-1005

vtp domain g21
vtp password g21
vtp mode client

interface f0/2
switchport mode access
switchport access vlan 13
exit

interface f0/3
switchport mode access
switchport access vlan 43
exit

```

Seguridad de interfaces:
```
config t
int range f0/7 - 24,f0/5
switchport mode access
switchport access vlan 999
exit

int range f0/1,f0/4,f0/6
switchport trunk native vlan 99
exit

interface f0/2
switchport port-security
switchport port-security maximum 5
switchport port-security mac-address sticky
exit

```

# Escenario de mejor convergencia

Falta configurar STP

El EtherChannel se configuro con LACP

Para cambiar a PAGP, se debe cambiar en la configuracion DE CADA SWITCH y cada interfaz que tenga EtherChannel

Por ejemplo en S0

Cambiar esto
    
```
int range f0/2 - 3
channel-protocol lacp
channel-group 1 mode active
exit

int range f0/5 - 6
channel-protocol lacp
channel-group 3 mode active
exit
```

Por esto
```
int range f0/2 - 3
channel-protocol pagp
channel-group 1 mode on auto
exit

int range f0/5 - 6
channel-protocol pagp
channel-group 3 mode on auto
exit

```
# Topologia

![](Topologia.png)

# Vodafone

## Tabla Subredes

Aprovechamiento del 24% de 192.168.21.0/24

| Sub-Red            | Hosts | IP de Red        | Mascara         | Primer Host    | Ultimo Host    | Broadcast      |
|--------------------|-------|------------------|-----------------|----------------|----------------|----------------|
| Educacion          | 30    | 192.168.21.0/27  | 255.255.255.224 | 192.168.21.1   | 192.168.21.30  | 192.168.21.31  |
| Cultura y Deportes | 30    | 192.168.21.32/27 | 255.255.255.224 | 192.168.21.33  | 192.168.21.62  | 192.168.21.63  |
| Cultura y Deportes | 30    | 192.168.21.64/27 | 255.255.255.224 | 192.168.21.65  | 192.168.21.62  | 192.168.21.95  |

## Configuracion de Interfaces

### R1
```
enable
conf t

int S0/3/0
ip address 10.1.1.1 255.255.255.252
no shutdown
exit

int S0/3/1
ip address 10.1.13.1 255.255.255.252
no shutdown
exit

int G0/0
ip address 10.1.2.1 255.255.255.252
no shutdown
exit

int G0/1
ip address 10.1.3.1 255.255.255.252
no shutdown
exit

int G0/2
ip address 10.1.4.1 255.255.255.252
no shutdown
exit
```

### R2
```
enable
conf t

int G0/0
ip address 10.1.2.2 255.255.255.252
no shutdown
exit

int G0/1
ip address 192.168.21.1 255.255.255.224
no shutdown
exit
```

### R3
```
enable
conf t

int G0/0
ip address 10.1.3.2 255.255.255.252
no shutdown
exit

int G0/1
ip address 192.168.21.33 255.255.255.224
no shutdown
exit
```

### R4
```
enable
conf t

int G0/0
ip address 10.1.4.2 255.255.255.252
no shutdown
exit

int G0/1
ip address 192.168.21.65 255.255.255.224
no shutdown
exit
```


## Configuracion de Ruteo

### R1 
```
enable
conf t

router ospf 100
network 10.1.2.0 0.0.0.3 area 0
exit

router ospf 200
network 10.1.3.0 0.0.0.3 area 0
exit

router rip
version 2
no auto-summary
network 10.1.4.0
exit

router rip
redistribute ospf 100 metric 15
redistribute ospf 200 metric 15
exit

router ospf 100
redistribute rip subnets
redistribute ospf 200 subnet
exit

router ospf 200
redistribute rip subnets
redistribute ospf 100 subnet
exit

router bgp 100
network 10.1.1.0 mask 255.255.255.252
neighbor 10.1.1.2 remote-as 200
network 10.1.13.0 mask 255.255.255.252
neighbor 10.1.13.2 remote-as 300
redistribute ospf 100
redistribute ospf 200
exit

```

### R2
```
router ospf 100
network 192.168.21.1 0.0.0.31 area 0
network 10.1.2.0 0.0.0.3 area 0
end

access-list 2 permit 192.168.81.0 0.0.0.31
access-list 2 permit 192.168.81.32 0.0.0.31
access-list 2 permit 192.168.21.0 0.0.0.31

interface g0/1
ip access-group 2 out
exit
```


### R3
```
router ospf 200
network 192.168.21.33 0.0.0.31 area 0
network 10.1.3.0 0.0.0.3 area 0
end

access-list 2 permit 192.168.81.0 0.0.0.31
access-list 2 permit 192.168.81.32 0.0.0.31
access-list 2 permit 192.168.21.0 0.0.0.31

interface g0/1
ip access-group 2 out
exit
```

### R4
```
router rip
version 2
no auto-summary
network 192.168.21.64
network 10.1.4.0

access-list 2 permit 192.168.81.0 0.0.0.31

interface g0/1
ip access-group 2 out
exit
```

# Telefónica

## Tabla Subredes

Aprovechamiento del 24% de 192.168.81.0/24

| Sub-Red         | Hosts | IP de Red        | Mascara         | Primer Host    | Ultimo Host    | Broadcast      |
|-----------------|-------|------------------|-----------------|----------------|----------------|----------------|
| Funcion Publica | 30    | 192.168.81.0/27  | 255.255.255.224 | 192.168.81.1   | 192.168.81.30  | 192.168.81.31  |
| Salud           | 30    | 192.168.81.32/27 | 255.255.255.224 | 192.168.81.33  | 192.168.81.62  | 192.168.81.63  |

## Configuracion de Interfaces

### R5
```
enable
conf t

int G0/0
ip address 10.1.5.1 255.255.255.252
no shutdown
exit

int S0/3/0
ip address 10.1.1.2 255.255.255.252
no shutdown
exit

int S0/3/1
ip address 10.1.14.2 255.255.255.252
no shutdown
exit
```

### R6
```
enable
conf t

int G0/0
ip address 10.1.5.2 255.255.255.252
no shutdown
exit

int G0/1
ip address 10.1.7.1 255.255.255.252
no shutdown
exit

int G0/2
ip address 10.1.8.2 255.255.255.252
no shutdown
exit
```

### R7
```
enable
conf t

int G0/0
ip address 10.1.6.1 255.255.255.252
no shutdown
exit

int G0/1
ip address 10.1.7.2 255.255.255.252
no shutdown
exit

int G0/2
ip address 192.168.81.1 255.255.255.224
no shutdown
exit
```

### R8
```
enable
conf t

int G0/0
ip address 10.1.6.2 255.255.255.252
no shutdown
exit

int G0/1
ip address 192.168.81.33 255.255.255.224
no shutdown
exit

int G0/2
ip address 10.1.8.1 255.255.255.252
no shutdown
exit
```

## Configuracion de Ruteo

### R5
```
enable
conf t

router rip
version 2
no auto-summary
network 10.1.5.0
exit

router bgp 200
network 10.1.1.0 mask 255.255.255.252
neighbor 10.1.1.1 remote-as 100
network 10.1.14.0 mask 255.255.255.252
neighbor 10.1.14.1 remote-as 300
redistribute rip subnets
exit
```

### R6
```
enable
conf t

router rip
version 2
no auto-summary
network 10.1.5.0
network 10.1.7.0
exit

router eigrp 100
network 10.1.8.0 0.0.0.3
no auto-summary
exit
```

### R7
```
enable
conf t

router rip
version 2
no auto-summary
network 192.168.81.0
network 10.1.7.0
network 10.1.6.0
exit

access-list 2 permit 192.168.21.0 0.0.0.31
access-list 2 permit 192.168.21.32 0.0.0.31
access-list 2 permit 192.168.21.64 0.0.0.31
access-list 2 permit 192.168.81.32 0.0.0.31

interface g0/2
ip access-group 2 out
exit
```

### R8
```
enable
conf t

router rip
version 2
no auto-summary
network 10.1.6.0
network 192.168.81.32
exit

router eigrp 100
network 10.1.8.0 0.0.0.3
network 192.168.81.32 0.0.0.31
no auto-summary
exit

router eigrp 100
Redistribute rip metric 10000 100 255 1 1500
exit

router rip
redistribute eigrp 100 metric 15
exit

access-list 2 permit 192.168.21.0 0.0.0.31
access-list 2 permit 192.168.21.32 0.0.0.31
access-list 2 permit 192.168.81.0 0.0.0.31

interface g0/1
ip access-group 2 out
exit
```

# Knology

## Tabla Subredes

Aprovechamiento del 24% de 192.168.51.0/24

| Sub-Red                | Hosts | IP de Red        | Mascara         | Primer Host    | Ultimo Host    | Broadcast      |
|------------------------|-------|------------------|-----------------|----------------|----------------|----------------|
| Desarrollo Empresarial | 30    | 192.168.51.0/27  | 255.255.255.224 | 192.168.51.1   | 192.168.51.30  | 192.168.51.31  |
| Desarrollo Económico   | 30    | 192.168.51.32/27 | 255.255.255.224 | 192.168.51.33  | 192.168.51.62  | 192.168.51.63  |


## Configuracion de Interfaces

### R9
```
enable
conf t

int G0/0
ip address 10.1.9.2 255.255.255.252
no shutdown
exit

int S0/3/0
ip address 10.1.13.2 255.255.255.252
no shutdown
exit

int S0/3/1
ip address 10.1.14.1 255.255.255.252
no shutdown
exit

```

### R10
```
enable
conf t

int G0/0
ip address 10.1.9.1 255.255.255.252
no shutdown
exit

int G0/1
ip address 10.1.11.1 255.255.255.252
no shutdown
exit 

int G0/2
ip address 10.1.12.2 255.255.255.252
no shutdown
exit 

```

### R11
```
enable
conf t

int G0/0
ip address 192.168.51.33 255.255.255.224
no shutdown
exit

int G0/1
ip address 10.1.10.2 255.255.255.252
no shutdown
exit 

int G0/2
ip address 10.1.11.2 255.255.255.252
no shutdown
exit 

```

### R12
```
enable
conf t

int G0/0
ip address 192.168.51.1 255.255.255.224
no shutdown
exit

int G0/1
ip address 10.1.10.1 255.255.255.252
no shutdown
exit 

int G0/2
ip address 10.1.12.1 255.255.255.252
no shutdown
exit 

```

## Configuracion de Ruteo

### R9
```
enable
conf t

router bgp 300
network 10.1.13.0 mask 255.255.255.252
network 10.1.14.0 mask 255.255.255.252
neighbor 10.1.13.1 remote-as 100
neighbor 10.1.14.2 remote-as 200
exit

router eigrp 200
network 10.1.9.0 0.0.0.3
redistribute bgp 100 metric 1 1 1 1 1
redistribute bgp 200 metric 1 1 1 1 1
no auto-summary
exit 

router bgp 300
redistribute eigrp 200
exit

```

### R10
```
enable
conf t

router eigrp 200
network 10.1.9.0 0.0.0.3
no auto-summary
exit 

router ospf 100
network 10.1.12.0 0.0.0.3 area 0
exit

router ospf 200
network 10.1.11.0 0.0.0.3 area 0
exit

router ospf 100
redistribute ospf 200 subnet
exit

router ospf 200
redistribute ospf 100 subnet
exit

router eigrp 200
redistribute ospf 100 metric 1 1 1 1 1
redistribute ospf 200 metric 1 1 1 1 1
exit 

```

### R11
```
enable
conf t

router eigrp 200
network 10.1.10.0 0.0.0.3
network 192.168.51.32 0.0.0.31
no auto-summary
exit 

router ospf 200
network 192.168.51.32 0.0.0.31 area 0
network 10.1.11.0 0.0.0.3 area 0
exit

access-list 2 permit 192.168.51.0 0.0.0.31

interface g0/0
ip access-group 2 out
exit
```

### R12
```
enable
conf t

router eigrp 200
network 10.1.10.0 0.0.0.3
network 192.168.51.0 0.0.0.31
no auto-summary
exit 

router ospf 100
network 192.168.51.0 0.0.0.31 area 0
network 10.1.12.0 0.0.0.3 area 0
exit

access-list 2 permit 192.168.51.32 0.0.0.31

interface g0/0
ip access-group 2 out
exit

```

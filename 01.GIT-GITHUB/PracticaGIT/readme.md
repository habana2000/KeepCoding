- ¿Qué comando utilizaste en el paso 11? ¿Por qué?

--> git commit --hard HEAD~1

--> Porque deshace el commit eliminando también los cambios de la working copy

- ¿Qué comando o comandos utilizaste en el paso 12? ¿Por qué?

--> git reflog ... para buscar el commit al que quiero ir

--> git reset -- hard xxxxxx ... con el código del commit que he buscado antes

- El merge del paso 13, ¿Causó algún conflicto? ¿Por qué?

--> NO, porque la rama styled és hija de la rama master, está en la misma secuencia de commits

- El merge del paso 19, ¿Causó algún conflicto? ¿Por qué?

> Auto-merging git-nuestro.md                                                    
> CONFLICT (content): Merge conflict in git-nuestro.md                           
> Automatic merge failed; fix conflicts and then commit the result.  

--> Porque el fichero se habia editado en las dos ramas, y no estaban en la misma línea de commit

- El merge del paso 21, ¿Causó algún conflicto? ¿Por qué?

--> NO, por el mismo motivo que antes, el fichero sólo se habia modificado en una de las ramas.

- ¿Qué comando o comandos utilizaste en el paso 25?

--> git log --graph

- El merge del paso 26, ¿Podría ser fast forward? ¿Por qué?

--> Si, porque estan en la misma línea de commits

- ¿Qué comando o comandos utilizaste en el paso 27?

--> git reflog para buscar el commit anterior de master

--> git reset xxxxx .... con el número de COMMIT al que quiero ir

- ¿Qué comando o comandos utilizaste en el paso 28?
--> git restore git-nuestro.md 

- ¿Qué comando o comandos utilizaste en el paso 29?

--> git branch -D tittle

--> con la -d no lo permitió porqué quedaba un commit descolgado

- ¿Qué comando o comandos utilizaste en el paso 30?

--> git reflog ... para buscar el commit del último merge, el que hemos deshecho

--> git reset --hard xxxxxx .... para ir a ese commit

- ¿Qué comando o comandos usaste en el paso 32?

--> git reflog .. para buscar el codigo del primer commit

--> git reset --hard xxxxxx ... para ir hacia él

- ¿Qué comando o comandos usaste en el punto 33?

--> git reflog .. para buscar el último commit

--> git reset --hard xxxxxx ... para ir hacia él


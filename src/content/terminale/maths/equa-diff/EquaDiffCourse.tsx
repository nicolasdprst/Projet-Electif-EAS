import React from 'react';

export default function EquaDiffCourse() {
  return (
    <>
      <p className="course-text">
        Ce cours a été construit de façon à ne laisser aucun point sombre lors de l'apprentissage de ce dernier ou durant sa lecture. Il généralise dans les sections 1 et 2, la notion d'équation différentielle en essayant tant bien que mal à définir de la manière la plus rigoureuse chacun des termes clés. En première lecture, le lecteur pourra se contenter de lire seulement les sections 3 et 4. Pour approfondir la notion, nous l'invitons à compléter sa lecture avec les sections 1 et 2.
      </p>

      <h2 className="section-title">1. Première approche</h2>

      <div className="box definition-box">
        <h4>Définition 1.</h4>
        <p className="course-text">On appelle <i>équation différentielle</i> une équation où l'inconnue est une fonction. Plus généralement, on considère {"\\(n\\in \\mathbb{N}\\)"} et {"\\(y\\)"} une fonction dérivable {"\\(n\\)"} fois sur un intervalle de {"\\(\\mathbb{R}\\)"} noté {"\\(I\\)"}. On dit que {"\\(y\\)"} est solution d'une équation différentielle lorsqu'il existe une fonction {"\\(F\\)"} non nulle telle que :</p>
        <div className="formula-box">
          {"\\[ \\forall x \\in I, \\quad \\quad F\\left(y,y',y'',...,y^{(n)}\\right)(x)=0 \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>où {"\\(y^{(n)}\\)"} désigne la dérivée {"\\(n\\)"}-ème de {"\\(y\\)"} sur {"\\(I\\)"}.</p>
      </div>

      <div className="box example-box">
        <h4>Exemple 1.</h4>
        <p className="course-text">Nous rencontrons en cours cette équation différentielle :</p>
        <div className="formula-box">{"\\[ y'+ay=0 \\]"}</div>
        <p className="course-text">où {"\\(y\\)"} est une fonction dérivable sur {"\\(\\mathbb{R}\\)"} et {"\\(a\\)"} une constante réelle. Essayons de trouver la fonction {"\\(F\\)"} tel que :</p>
        <div className="formula-box">{"\\[ \\forall x \\in \\mathbb{R}, \\quad \\quad F\\left(y,y'\\right)(x)=0 \\]"}</div>
        <p className="course-text">Ici, on observe que cette fonction {"\\(F\\)"} s'écrit comme :</p>
        <div className="formula-box">{"\\[ F : \\left(y,y'\\right) \\mapsto y'+ay \\]"}</div>
        <p className="course-text" style={{marginBottom: 0}}>On comprend ainsi la généralisation de la définition 1 sur cet exemple.</p>
      </div>

      <p className="course-text">
        Maintenant que l'on a défini rigoureusement ce que représente une équation différentielle, nous devons maintenant déterminer des schémas de raisonnement qui nous permettront de trouver l'inconnue {"\\(y\\)"} dans les cas rencontrés en cours. C'est l'objet de la section 3. Mais avant, définissons notre cadre d'étude.
      </p>
      
      <h2 className="section-title">2. Équation différentielle linéaire normalisée du premier ordre</h2>
      
      <p className="course-text">
        Ici, avant de détailler les solutions aux équations différentielles, il faut définir ces nouveaux termes : <strong>linéaire</strong>, <strong>normalisée</strong> et <strong>premier ordre</strong>.
      </p>
      
      <div className="box definition-box">
        <h4>Définition 2. (Linéaire)</h4>
        <p className="course-text">On appelle équation différentielle <i>linéaire</i>, une équation différentielle qui ne fait pas intervenir de termes croisés entre {"\\(y\\)"} et ses dérivées successives. Autrement dit, la fonction {"\\(F\\)"} qui caractérise cette équation est de la forme suivante :</p>
        <div className="formula-box">
          {"\\[ F : \\left(y,y',...,y^{(n)}\\right) \\mapsto \\sum_{k=0}^na_ky^{(k)} \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>où {"\\(a_0,a_1,...,a_n\\)"} sont des réels et par convention, on pose : {"\\(y^{(0)}=y\\)"}.</p>
      </div>

      <div className="course-text" style={{fontStyle: 'italic', color: '#666'}}>
        <p><strong>Remarque :</strong> Nous pouvons généraliser la définition précédente. Cette généralisation s'adresse au lecteur averti ! Une équation différentielle est linéaire si et seulement s'il existe {"\\(F\\)"} linéaire au sens d'application linéaire telle que l'équation différentielle s'écrit :</p>
        <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none'}}>
          {"\\[ \\forall x \\in I, \\quad \\quad F\\left(y,y',y'',...,y^{(n)}\\right)(x)=0 \\]"}
        </div>
        <p>L'intérêt de la linéarité est que cette équation vérifie alors le principe de superposition, c'est le théorème qui suit qu'on énonce dans le cas {"\\(n=2\\)"} mais qui se généralise naturellement pour {"\\(n\\ge3\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 1. (Principe de superposition)</h4>
        <p className="course-text">Soit {"\\((E)\\)"} une équation différentielle de la forme {"\\(y'+ay=0\\)"} où {"\\(y\\)"} est une fonction dérivable sur {"\\(I\\)"}.<br />
        Soient {"\\(f_1\\)"} et {"\\(f_2\\)"} deux solutions de {"\\((E)\\)"} et {"\\(\\lambda\\)"} un réel alors {"\\(\\lambda f_1+f_2\\)"} est une solution de (E).</p>
      </div>

      <div className="box example-box" style={{background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)'}}>
        <details>
          <summary className="font-bold cursor-pointer uppercase tracking-widest text-[10px]">Preuve</summary>
          <p className="course-text mt-4">Supposons qu'il existe {"\\(f_1\\)"} et {"\\(f_2\\)"} deux solutions de {"\\((E)\\)"} et prenons {"\\(\\lambda\\)"} un réel quelconque. Montrons {"\\(\\lambda f_1+f_2\\)"} est une solution de (E). Il suffit de l'écrire :</p>
          <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none'}}>
            {"\\[ \\begin{align*} \\left(\\lambda f_1+f_2\\right)'+a\\left(\\lambda f_1+f_2\\right)& =\\lambda f_1'+f_2'+a\\lambda f_1+af_2 \\quad \\textrm{par linéarité de la dérivée}\\\\ &= \\lambda f_1+a\\lambda f_1+f_2'+af_2\\\\ &= \\lambda\\underbrace{\\left(f_1'+af_1\\right)}_{= 0} + \\underbrace{\\left(f_2'+af_2\\right)}_{= 0} \\quad \\textrm{car $f_1$ et $f_2$ sont deux solutions de $(E)$} \\\\ &=0 \\end{align*} \\]"}
          </div>
          <p className="course-text" style={{marginBottom: 0}}>On montre ainsi que {"\\(\\lambda f_1+f_2\\)"} est solution de {"\\((E)\\)"}.</p>
        </details>
      </div>
      
      <div className="box proposition-box">
          <h4>Corollaire 1.</h4>
          <p className="course-text" style={{marginBottom: 0}}>Toute équation différentielle linéaire vérifie le principe de superposition.</p>
      </div>

      <div className="box definition-box">
        <h4>Définition 3. (Normalisée)</h4>
        <p className="course-text">On appelle équation différentielle linéaire <i>normalisée</i>, une équation différentielle linéaire qui a comme coefficient devant le terme de plus haute dérivation de {"\\(y\\)"} non nul égal à 1. En notant {"\\(p\\)"} l'ordre de dérivation le plus élevé de {"\\(y\\)"} tel que {"\\(y^{(p)}\\)"} est non nul alors {"\\(a_p=1\\)"} et la fonction {"\\(F\\)"} qui caractérise cette équation est de la forme suivante :</p>
        <div className="formula-box">
          {"\\[ F : \\left(y,y',...,y^{(n)}\\right) \\mapsto \\sum_{k=0}^pa_ky^{(k)} \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>où {"\\(a_0,a_1,...,a_p\\)"} sont des réels avec {"\\(a_p=1\\)"}.</p>
      </div>

      <div className="course-text" style={{fontStyle: 'italic', color: '#666'}}>
        <p>La définition, bien qu'elle soit abstraite, permet de dire que l'équation différentielle de la forme {"\\(y'+ay=0\\)"} est normalisée car le coefficient devant {"\\(y'\\)"} est égal 1. C'est le cas {"\\(p=1\\)"} de la définition précédente.</p>
      </div>
      
      <div className="box definition-box">
        <h4>Définition 4. (Premier ordre)</h4>
        <p className="course-text">On appelle équation différentielle linéaire du <i>premier ordre</i>, une équation différentielle linéaire qui associe à travers une égalité les termes {"\\(y\\)"} et {"\\(y'\\)"}. La fonction {"\\(F\\)"} qui caractérise cette équation est donc de la forme suivante :</p>
        <div className="formula-box">
          {"\\[ F : \\left(y,y'\\right) \\mapsto a_1y'+a_0y \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>où {"\\(a_0,a_1\\)"} deux réels.</p>
      </div>
      
      <p className="course-text">
        Dans toute la suite, nous n'étudierons que des équations différentielles linéaires normalisées du <strong>premier ordre</strong>. En effet, les équations différentielles étudiées dans le cadre du programme sont de cette forme : électrocinétique, radioactivité, profil de la température.
      </p>

      <h2 className="section-title">3. Résolution d'équations différentielles</h2>
      
      <p className="course-text">
        Dans cette section, nous allons étudier différentes équations différentielles classiques dont la solution est à connaître parfaitement.
      </p>
      
      <h3 className="subsection-title">3.1. Solution polynomiale</h3>
      <p className="course-text">Soient {"\\(n\\in \\mathbb{N^*}\\)"} et {"\\(y\\)"} une fonction dérivable {"\\(n\\)"} fois sur {"\\(I\\)"} et on pose (E), l'équation différentielle :</p>
      <div className="formula-box">{"\\[ y^{(n)}=0 \\quad (E) \\]"}</div>
      <p className="course-text">où {"\\(y^{(n)}\\)"} désigne la dérivée {"\\(n\\)"}-ème de {"\\(y\\)"}.</p>

      <div className="box definition-box">
        <h4>Définition 5. (Polynôme réel)</h4>
        <p className="course-text">On appelle polynôme réel d'indéterminée {"\\(X\\)"} de degré {"\\(n\\)"}, une combinaison linéaire de monômes de degré au plus égal à {"\\(n\\)"}. Autrement, il existe {"\\(c_0,c_1,...,c_n\\)"} des réels tels que :</p>
        <div className="formula-box">
          {"\\[ P=\\sum_{k=0}^nc_kX^k=c_0+c_1X+c_2X^2+...+c_nX^n \\]"}
        </div>
      </div>
      
      <div className="box definition-box">
        <h4>Définition 6. (Fonction polynomiale)</h4>
        <p className="course-text" style={{marginBottom: 0}}>On appelle fonction polynomiale de degré {"\\(n\\)"} sur {"\\(I\\)"}, toute fonction {"\\(f\\)"} définie sur {"\\(I\\)"} telle qu'il existe un polynôme {"\\(P\\)"} de degré {"\\(n\\)"} tel que pour tout {"\\(x\\in I\\)"}, {"\\(f(x)=P(x)\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 2. (Solution polynomiale)</h4>
        <p className="course-text" style={{marginBottom: 0}}>La solution à l'équation (E) est un polynôme de degré {"\\((n-1)\\)"}.</p>
      </div>
      
      <div className="box example-box" style={{background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)'}}>
        <details>
          <summary className="font-bold cursor-pointer uppercase tracking-widest text-[10px]">Preuve</summary>
          <p className="course-text mt-4">Il faut prouver une équivalence, autrement dit, si {"\\(y\\)"} est solution de (E) alors {"\\(y\\)"} est une fonction polynomiale de degré {"\\((n-1)\\)"} puis réciproquement, si {"\\(f\\)"} est une fonction polynomiale de degré {"\\((n-1)\\)"} alors {"\\(f\\)"} est solution de (E).</p>
          <p className="course-text"><strong>{"\\(\\Longrightarrow\\)"} :</strong> Soit {"\\(y\\)"} une fonction. Montrons ce résultat par récurrence, fixons {"\\(n\\)"} un entier naturel non nul et posons {"\\(P(n)\\)"} le prédicat : "Si {"\\(y\\)"} est dérivable {"\\(n\\)"} fois sur {"\\(I\\)"} et est solution de l'équation {"\\(y^{(n)}=0\\)"} alors {"\\(y\\)"} est une fonction polynomiale de degré {"\\((n-1)\\)"}".</p>
          <p className="course-text"><strong>Initialisation :</strong> On pose {"\\(n=1\\)"}. On se donne {"\\(y\\)"} dérivable sur {"\\(I\\)"} et qui vérifie l'équation différentielle {"\\(y'=0\\)"}. Il en suit naturellement que {"\\(y\\)"} est une fonction constante donc il existe {"\\(C\\)"} réel tel que pour tout {"\\(x\\in I\\)"}, {"\\(y(x)=C=Cx^0\\)"} car {"\\(x^0=1\\)"}. Donc {"\\(y\\)"} est une fonction polynomiale de degré 0. La propriété est ainsi initialisée.</p>
          <p className="course-text"><strong>Hérédité :</strong> Soit {"\\(n\\in \\mathbb{N^*}\\)"} tel que la propriété {"\\(P(n)\\)"} est vérifiée. Montrons que la propriété au rang {"\\((n+1)\\)"} est vraie. <br />
          Soit {"\\(y\\)"} une fonction {"\\((n+1)\\)"} fois dérivable sur {"\\(I\\)"} solution de l'équation {"\\(y^{(n+1)}=0\\)"}. Posons le changement de variable {"\\(Y=y'\\)"} alors {"\\(Y\\)"} est dérivable {"\\(n\\)"} fois sur {"\\(I\\)"} et est solution de l'équation {"\\(Y^{(n)}=0\\)"}. Appliquons à {"\\(Y\\)"} notre hypothèse de récurrence. Il en résulte que {"\\(Y\\)"} est une fonction polynomiale de degré {"\\((n-1)\\)"}. C'est équivalent à dire que {"\\(y'\\)"} est une fonction polynomiale de degré {"\\((n-1)\\)"}. En intégrant une fois pour récupérer {"\\(y\\)"}, il en suit que {"\\(y\\)"} est une fonction polynomiale de degré {"\\(n\\)"}. L'hérédité se propage.</p>
          <p className="course-text"><strong>Conclusion :</strong> On vient de prouver que pour tout {"\\(n\\)"} entier naturel non nul, {"\\(P(n)\\)"} est vraie. Ce qui conclut la récurrence.</p>
          <p className="course-text" style={{marginBottom: 0}}><strong>{"\\(\\Longleftarrow\\)"} :</strong> Ici, il suffit de vérifier que la dérivée d'une fonction polynomiale de degré {"\\(d\\in \\mathbb{N^*}\\)"} abaisse son degré à {"\\((d-1)\\)"}. Ainsi, le dériver {"\\((d+1)\\)"} fois conduit à un degré final égal à -1. Dans l'usage, un polynôme de degré -1 renvoie au polynôme constant égal à 0. Ainsi, en appliquant ce résultat dans notre cas, il en résulte que toute fonction polynomiale de degré {"\\((n-1)\\)"} est solution de (E).</p>
        </details>
      </div>

      <h3 className="subsection-title">3.2. Solution de l'équation {"\\(y'+ay=0\\)"}</h3>
      <p className="course-text">Soient {"\\(a\\)"} un réel et {"\\(y\\)"} une fonction dérivable sur un intervalle {"\\(I\\)"} et on note (E), l'équation différentielle :</p>
      <div className="formula-box">{"\\[ y'+ay=0 \\quad (E) \\]"}</div>
      <p className="course-text">On parle aussi d'équation différentielle homogène.</p>
      
      <div className="box proposition-box">
        <h4>Théorème 3. (Solution de l'équation {"\\(y'+ay=0\\)"})</h4>
        <p className="course-text">La solution à l'équation (E) est de la forme suivante :</p>
        <div className="formula-box">
          {"\\[ y : x \\mapsto C^{ste}\\exp(-ax) \\]"}
        </div>
        <p className="course-text">où {"\\(C^{ste}\\)"} est une constante réelle. De plus, si {"\\(y\\)"} est définie en 0 alors :</p>
        <div className="formula-box" style={{marginBottom: 0}}>
          {"\\[ C^{ste}=y(0) \\]"}
        </div>
      </div>
      
      <div className="box example-box" style={{background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)'}}>
        <details>
          <summary className="font-bold cursor-pointer uppercase tracking-widest text-[10px]">Preuve</summary>
          <div className="formula-box mt-4" style={{background: 'transparent', color: 'inherit', boxShadow: 'none'}}>
            {"\\[ \\begin{align*} y'+ay=0 &\\iff \\forall x\\in I, \\quad y'(x)+ay(x)=0\\\\ &\\iff \\forall x\\in I,\\quad \\exp(ax)\\left(y'(x)+ay(x)\\right)=0 \\\\ &\\iff \\forall x\\in I, \\quad y'(x)\\exp(ax)+ay(x)\\exp(ax)=0\\\\ &\\iff \\forall x\\in I, \\quad (\\exp\\left(f\\right)y)'(x)=0 \\quad \\textrm{où $f:x\\mapsto ax$}\\\\ &\\iff \\exists C^{ste}\\in \\mathbb{R} : \\forall x \\in I,\\quad (\\exp\\left(f\\right)y)(x)=C^{ste}\\\\ &\\iff \\exists C^{ste}\\in \\mathbb{R} : \\forall x \\in I,\\quad y(x)=C^{ste}\\exp\\left(-f(x)\\right)\\\\ &\\iff \\exists C^{ste}\\in \\mathbb{R} : \\forall x \\in I,\\quad y(x)=C^{ste}\\exp\\left(-ax\\right) \\end{align*} \\]"}
          </div>
          <p className="course-text" style={{marginBottom: 0}}>Cela achève la preuve.</p>
        </details>
      </div>

      <h3 className="subsection-title">3.3. Résolution d'une équation de la forme {"\\(y'+ay=b\\)"} avec {"\\(b\\)"} une constante</h3>
      <p className="course-text">Soient {"\\(a,b\\)"} deux réels et {"\\(y\\)"} une fonction dérivable et on note (E), l'équation différentielle :</p>
      <div className="formula-box">{"\\[ y'+ay=b \\quad (E) \\]"}</div>
      <p className="course-text">On parle aussi d'équation différentielle à second membre constant.</p>

      <div className="box definition-box">
        <h4>Définition 7. (Solution particulière)</h4>
        <p className="course-text" style={{marginBottom: 0}}>On appelle solution particulière de l'équation (E), une fonction trouvée {"\\(f_p\\)"} solution de (E) autrement dit {"\\(f_p'+af_p=b\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 4. (Forme des solutions d'une équation différentielle)</h4>
        <p className="course-text">Notons {"\\(f_p\\)"} une solution particulière de (E) et {"\\(f\\)"} une solution quelconque de (E). Alors il existe {"\\(h\\)"} solution de l'équation homogène associée à (E) telle que :</p>
        <div className="formula-box" style={{marginBottom: 0}}>
          {"\\[ h=f-f_p \\]"}
        </div>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 5. (Solution de l'équation {"\\(y'+ay=b\\)"})</h4>
        <p className="course-text">La solution à l'équation (E) dépend de la valeur de {"\\(a\\)"}.<br />
        Si {"\\(a\\)"} est nul, alors l'équation devient {"\\(y'=b\\)"} et la solution est une fonction polynomiale de degré 1.<br />
        Sinon, quand {"\\(a\\)"} est non nul alors la solution de (E) est de la forme :</p>
        <div className="formula-box">
          {"\\[ y : x \\mapsto C^{ste}\\exp(-ax) + \\frac{b}{a} \\]"}
        </div>
        <p className="course-text">où {"\\(C^{ste}\\)"} est une constante réelle. De plus, si {"\\(y\\)"} est définie en 0 alors :</p>
        <div className="formula-box">
          {"\\[ C^{ste}=y(0)-\\frac{b}{a} \\]"}
        </div>
        <p className="course-text">En résumé, quand {"\\(a\\)"} est non nul, la solution particulière s'écrit :</p>
        <div className="formula-box" style={{marginBottom: 0}}>
          {"\\[ f_p : x \\mapsto \\frac{b}{a} \\]"}
        </div>
      </div>

      <h3 className="subsection-title">3.4. Résolution d'une équation différentielle à second membre polynomial</h3>
      <p className="course-text">Soient {"\\(a\\)"} réel, {"\\(f\\)"} une fonction polynomiale de degré {"\\(d\\in \\mathbb{N}\\)"}, {"\\(y\\)"} une fonction dérivable et on note (E), l'équation différentielle :</p>
      <div className="formula-box">{"\\[ y'+ay=f \\quad (E) \\]"}</div>
      <p className="course-text">On parle d'équation différentielle à second membre polynomial.</p>
      
      <div className="box proposition-box">
        <h4>Théorème 6. (Solution de l'équation {"\\(y'+ay=f\\)"} avec {"\\(f\\)"} une fonction polynomiale)</h4>
        <p className="course-text" style={{marginBottom: 0}}>
          La solution à l'équation (E) dépend de la valeur de {"\\(a\\)"}.<br />
          Si {"\\(a\\)"} est nul, alors l'équation devient {"\\(y'=f\\)"} et une solution particulière {"\\(p\\)"} est une fonction polynomiale de degré {"\\((d+1)\\)"}.<br />
          Sinon, quand {"\\(a\\)"} est non nul alors une solution particulière {"\\(p\\)"} de (E) est une fonction polynomiale de degré {"\\(d\\)"}.<br />
          Ainsi, selon les cas distingués, {"\\(y\\)"} s'écrit comme :
          {"\\[ y : x \\mapsto C^{ste}\\exp(-ax) + p(x) \\]"}
        </p>
      </div>
    </>
  );
}

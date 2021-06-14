private void ReadBOP()
        {
            strErrorDet = "ReadBOP" + System.Environment.NewLine;
            EscribirLog("######################## Empieza IterarBOP ########################");
            IterarBOP();
            EscribirLog("######################## Empieza ArmarFamilias ########################");
            ArmarFamilias();
            //CorregirTiempos();
            EscribirLog("######################## Empieza ConsumoMateriales ########################");
            ConsumoMateriales(); //TODO Descomentar
            EscribirLog("######################## Empieza CompletarWAConjunto ########################");
            //CompletarWAConjunto();
            EscribirLog("######################## Empiezo ReadBOPLocation ########################");
            ReadBOPLocation();
            UnirRutas();//Esta funcion la uso para unificar las rutas, ya que existen varias apariciones de cada una (algunas con datos que las otras no
            EscribirLog("######################## Empieza EscribirRutas ########################");
            EscribirRutas();
            //EncabezadoRutas();
            strError += "ReadBOP Completo" + System.Environment.NewLine;

        }private void IterarBOP()
        {
            strError += "IterarBOP" + System.Environment.NewLine;
            String strProcesses = "'";
            String strProcessRevisions = "'";
            //Obtengo los Process con subtype=MEProcess
            XmlNodeList processes = xmlDocBOP.SelectNodes("//a:Process[@subType='MEProcess']", mgr);
            foreach (XmlNode p in processes){
                strProcesses += "#" + p.Attributes["id"].Value;
            }
            strProcesses += "'";
            //con el listado de process obtengo los processRevision
            XmlNodeList ProcessRevisions = xmlDocBOP.SelectNodes("//a:ProcessRevision[contains(" + strProcesses + ",@masterRef)]", mgr);
            foreach (XmlNode pr in ProcessRevisions)
            {
                strProcessRevisions += "#" + pr.Attributes["id"].Value + "a";
            }
            strProcessRevisions += "'";
            //Con el listado de ProcessRevision obtengo los PRocessOcurrence
            XmlNodeList ProcessOccurrences = xmlDocBOP.SelectNodes("//a:ProcessOccurrence[contains(" + strProcessRevisions + ",concat(@instancedRef,'a'))]", mgr);
            foreach (XmlNode ProcessOccurrence in ProcessOccurrences)
            {
                Ruta ruta = new Ruta();
                ruta.parentIdProcessOccurrenceId = ProcessOccurrence.Attributes["id"].Value;
                try
                {
                    ruta.parentIdProcessOccurrenceParentId = ProcessOccurrence.Attributes["parentRef"].Value.Replace("#", "");
                }
                catch (Exception ex)
                {
                    ruta.parentIdProcessOccurrenceParentId = "Sin padre";
                }
                XmlNode ProcessRevision = xmlDocBOP.SelectNodes("//a:ProcessRevision[@id='" + ProcessOccurrence.Attributes["instancedRef"].Value.Replace("#", "") + "']", mgr)[0];
                
                ruta.ProcessRevision = ProcessRevision.Attributes["id"].Value;
                String ProcessRevisionMasterRef = ProcessRevision.Attributes["masterRef"].Value;
                XmlNode Process = xmlDocBOP.SelectNodes("//a:Process[@id='" + ProcessRevisionMasterRef.Replace("#", "") + "']", mgr)[0];
                ruta.Process = Process.Attributes["id"].Value;
                //String revision = xmlDocBOP.SelectNodes("//a:ProcessRevision[@id='" + ProcessRevision.Attributes["instancedRef"].Value.Replace("#", "") + "']", mgr)[0]
                // nombre viejo ruta.name = Process.Attributes["catalogueId"].Value + "/" + ProcessRevision.Attributes["revision"].Value;
                // Ahora lo saco de el processRevision/userData/UserValue atributo value
                ruta.name = xmlDocBOP.SelectNodes("//a:ProcessRevision[@id='" + ProcessOccurrence.Attributes["instancedRef"].Value.Replace("#", "") + "']/a:UserData/a:UserValue[@title='object_string']", mgr)[0].Attributes["value"].Value;
                try { if (ruta.name.Substring(ruta.name.Length - 4, 4) == "-BOP") { ruta.codigoNombre = ruta.name.Substring(ruta.name.Length - 13, 9); } } catch { }
                ruta.location = "";
                try
                {
                    ruta.itemId = Process.Attributes["name"].Value.Substring(Process.Attributes["name"].Value.Length - 8);
                }
                catch
                {
                    ruta.itemId = "nombre incompleto";
                }

                ////Obtengo las operaciones para obtener los PAP y TRF
                //XmlNodeList ProcessOccurrencesOp = xmlDocBOP.SelectNodes("//a:ProcessOccurrence[@instancedRef='" + ProcessOccurrence.Attributes["id"].Value.Replace("#", "") + "']", mgr);
                //foreach (XmlNode POOp in ProcessOccurrencesOp)
                //{
                //    string POOp_instancedRef = POOp.Attributes["instancedRef"].Value;
                //    XmlNode OperationRevision = xmlDocBOP.SelectNodes("//a:OperationRevision[@id='" + POOp_instancedRef + "' and @subType='MEOPRevision']", mgr)[0];
                //}

                //XmlNodeList ProcessOccurrencesOp = xmlDocBOP.SelectNodes("//a:ProcessOccurrence[@parentRef='" + ProcessOccurrence.Attributes["id"].Value.Replace("#", "") + "']", mgr);
                //foreach (XmlNode POOp in ProcessOccurrencesOp)
                //{
                //    string POOp_instancedRef = POOp.Attributes["instancedRef"].Value + " ";
                //    XmlNode OperationRevision = xmlDocBOP.SelectNodes("//a:AssociatedAttachment[contains('" + POOp_instancedRef + "',concat(@id,' ')) and @role='METimeAnalysisRelation']", mgr)[0];
                //}


                rutasTemp.Add(ruta);

            }
            //string s = "ID | ParentID | ProcessRevision | Process | name | itemId" + System.Environment.NewLine;
            //foreach (Ruta r in rutasTemp)
            //{
            //    s += r.parentIdProcessOccurrenceId + " | " + r.parentIdProcessOccurrenceParentId + " | " + r.ProcessRevision + " | " + r.Process  + " | " + r.name + " | " + r.itemId + System.Environment.NewLine;
            //}
            //MessageBox.Show(s);
            
        }
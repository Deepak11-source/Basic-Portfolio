<?php
  header('Content-Type: application/download');
  header('Content-Disposition: attachment; filename="cv.docx"');
  header("Content-Length: " . filesize("cv.docx"));
  $fp = fopen("cv.docx", "r");
  fpassthru($fp);
  fclose($fp);
?>
